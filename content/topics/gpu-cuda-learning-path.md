---
title: GPU Kernel Optimization Learning Path
created: 2026-03-25
tags: [gpu, cuda, ai-infrastructure, kernel-optimization, pmpp, triton, cute]
---

# GPU Kernel Optimization Learning Path

## Overview

Learning roadmap for transitioning from web development/control systems to AI infrastructure kernel optimization. Focuses on concepts from ai& job descriptions: PMPP, Profiling, Kernel Fusion, Triton, CuTe.

**Background Context:** Electrical/Control Systems Engineering + TypeScript Web Developer → AI Infrastructure

---

## 1) Core Concepts Map

### What You're Learning

| Concept | What It Is | Why It Matters | Difficulty |
|---------|-----------|----------------|------------|
| **PMPP** | GPU programming textbook/methodology | Foundation for understanding GPU architecture | Medium |
| **Profiling** | Performance analysis tools (Nsight, rocprof) | Identify bottlenecks in GPU code | Medium |
| **Kernel Fusion** | Combining multiple operations into one kernel | Reduces memory bandwidth, 3-5x speedups | Medium |
| **Triton** | Python-like GPU kernel language | Write optimized kernels without C++ CUDA | Easy |
| **CuTe** | NVIDIA's C++ template library for CUDA | Write 90%+ peak performance kernels | Hard |
| **Tiling** | Breaking computations into cache-friendly blocks | Essential for memory-bound AI workloads | Hard |

---

## 2) Learning Phases

### Phase 1: Foundation (Weeks 1-4)

**Goal:** Understand GPU architecture and basic CUDA

**Resources:**
- Book: *Programming Massively Parallel Processors (PMPP)* 4th Edition - Kirk & Hwu
- CUDA Toolkit installation
- Nsight Compute basics

**Key Topics:**
1. GPU Architecture (SIMT model)
   - Thread hierarchy: Grid → Block → Warp → Thread
   - Memory hierarchy: Global → L2 → Shared → Registers
   
2. Memory Coalescing
   - Why it matters: Uncoalesced access = 10-100x slowdown
   - Pattern: Thread i accesses address base + i

3. Basic CUDA Syntax
   ```cpp
   __global__ void vectorAdd(float* a, float* b, float* c, int n) {
       int i = blockIdx.x * blockDim.x + threadIdx.x;
       if (i < n) c[i] = a[i] + b[i];
   }
   ```

**Hands-on Exercises:**
- [ ] Vector addition
- [ ] Matrix multiplication (naive)
- [ ] Matrix multiplication (tiled with shared memory)

**Checkpoint Questions:**
1. What's the difference between a block and a warp?
2. Why is shared memory faster than global memory?
3. What causes memory bank conflicts?

---

### Phase 2: Profiling & Optimization (Weeks 5-8)

**Goal:** Learn to identify and fix performance bottlenecks

**Tools:**
- **Nsight Compute:** Kernel-level profiling (NVIDIA)
- **rocprof:** AMD GPU profiling
- **Perfetto:** Timeline visualization
- **Roofline Analysis:** Compute vs memory bound

**Key Metrics to Understand:**

| Metric | What It Measures | Good Value |
|--------|-----------------|------------|
| **Occupancy** | % of GPU being used | > 70% |
| **Memory Throughput** | GB/s achieved | Close to theoretical |
| **Compute Utilization** | % of compute units active | > 80% |
| **Warp Divergence** | Threads taking different paths | Minimize |

**Roofline Model:**
- **Memory-bound:** Increasing compute won't help (most AI workloads)
- **Compute-bound:** Need better algorithms/Tensor Cores

**Profiling Workflow:**
1. Run application with profiler
2. Identify top kernels by time
3. Check if memory or compute bound
4. Apply optimizations
5. Re-profile and compare

**Hands-on:**
- [ ] Profile a PyTorch model
- [ ] Identify memory bottleneck
- [ ] Implement optimization and measure improvement

---

### Phase 3: Triton (Weeks 9-12)

**Goal:** Write GPU kernels in Python

**Why Triton:**
- Write optimized kernels in Python (not C++)
- Matches cuBLAS performance in 25 lines
- Used by PyTorch 2.0 compile

**Core Concepts:**

```python
import triton
import triton.language as tl

@triton.jit
def kernel(x_ptr, y_ptr, output_ptr, n_elements, BLOCK_SIZE: tl.constexpr):
    # Get program ID (which block this is)
    pid = tl.program_id(axis=0)
    
    # Compute block start
    block_start = pid * BLOCK_SIZE
    
    # Create offsets for this block
    offsets = block_start + tl.arange(0, BLOCK_SIZE)
    
    # Create mask for bounds checking
    mask = offsets < n_elements
    
    # Load data
    x = tl.load(x_ptr + offsets, mask=mask)
    y = tl.load(y_ptr + offsets, mask=mask)
    
    # Compute
    output = x + y
    
    # Store result
    tl.store(output_ptr + offsets, output, mask=mask)
```

**Key Ideas:**
- **Block-based:** You write code for a block, not individual threads
- **Automatic optimization:** Triton handles memory coalescing, shared memory
- **Python syntax:** Leverage your existing skills

**Hands-on Projects:**
- [ ] Implement vector addition in Triton
- [ ] Implement matrix multiplication
- [ ] Implement FlashAttention-2 (advanced)

**Resources:**
- Triton tutorials: https://triton-lang.org/main/getting-started/tutorials/
- FlashAttention Triton implementation on GitHub

---

### Phase 4: Kernel Fusion & Advanced Optimization (Weeks 13-16)

**Goal:** Understand and implement kernel fusion strategies

**What is Kernel Fusion?**

Without fusion:
```python
# Kernel 1: Load x, y → compute temp = x + y → store temp
# Kernel 2: Load temp → compute relu(temp) → store result
# 4 memory operations (2 loads, 2 stores)
```

With fusion:
```python
# Single kernel: Load x, y → compute relu(x + y) → store result
# 3 memory operations (2 loads, 1 store) = 25% reduction
```

**Fusion Types:**

1. **Element-wise Fusion:** activations, dropout, scale
2. **Horizontal Fusion:** Independent ops running together
3. **Vertical Fusion:** Producer-consumer chains
4. **Epilogue Fusion:** GEMM + activation (e.g., Linear + ReLU)

**Real Examples:**

```python
# LayerNorm fusion
# Without fusion: subtract mean, divide by std, scale, shift = 4 kernels
# With fusion: 1 kernel

# Attention fusion (FlashAttention)
# Without: Q×K, softmax, ×V = separate kernels, O(N²) memory
# With: Tiled computation, O(N) memory, 2-4x faster
```

**When to Fuse:**
- ✅ Element-wise ops
- ✅ Producer-consumer with data reuse
- ✅ Memory-bound operations
- ❌ Divergent control flow
- ❌ Too many registers needed

**Tools:**
- PyTorch 2.0 `torch.compile` (automatic fusion)
- Triton for custom fused kernels
- XLA (TensorFlow) fusion strategies

---

### Phase 5: CuTe & CUTLASS (Weeks 17-24)

**Goal:** Write peak-performance kernels using NVIDIA's library

**What is CuTe?**
- C++ template library in CUTLASS
- Separates logical tensor descriptions from physical layouts
- Used to implement cuBLAS, cuDNN

**Core Abstractions:**

```cpp
// Layout describes how multidimensional data is stored
auto layout = make_layout(make_shape(M, N), make_stride(N, 1));
// Shape: (M, N) dimensions
// Stride: (N, 1) row-major layout

// Tensor combines data pointer with layout
Tensor A = make_tensor(ptr_A, layout);

// Tiling: Break into smaller blocks
auto tiled_A = tiled_divide(A, make_tile(128, 128));
```

**Tiling Strategy (The Heart of Performance):**

```
Global Memory (HBM):    1-2 TB/s
    ↓ Load tile
L2 Cache:               5-10 TB/s
    ↓
Shared Memory (SRAM):   10-20 TB/s
    ↓
Registers:              ~100 TB/s effective
    ↓ Compute
```

**Hierarchy of Tiles:**
- **CTA Tile:** Work per thread block (e.g., 128×128)
- **Warp Tile:** Work per warp (e.g., 64×64)
- **Thread Tile:** Work per thread (e.g., 8×4)

**CuTe Example - Matrix Multiply:**

```cpp
// Define MMA (Matrix Multiply Accumulate) operation
using MMA = SM80_16x8x16_F16F16F16F16_TN;

// Define tile shapes
auto cta_tile = make_shape(128, 128, 32);  // M, N, K
auto warp_tile = make_shape(64, 64, 32);

// Create tiled MMA
auto tiled_mma = make_tiled_mma(MMA{}, cta_tile);

// Partition work across warps
auto thr_mma = tiled_mma.get_slice(threadIdx.x);
```

**Why This Matters:**
- CUTLASS achieves **90%+ of theoretical peak** FLOPS
- Manual CUDA typically achieves 30-60%
- Essential for AI infrastructure companies

**Learning Path:**
1. Study CUTLASS quick start guide
2. Understand GEMM decomposition
3. Modify existing CuTe examples
4. Implement custom kernel variant

**Resources:**
- CUTLASS GitHub: https://github.com/NVIDIA/cutlass
- CuTe documentation in CUTLASS repo
- NVIDIA GTC talks on CUTLASS

---

## 3) Connection to Job Descriptions

### ai& - Inference Optimization Engineer

**Required Skills Mapping:**

| Job Requirement | Learning Phase | Topic |
|----------------|---------------|-------|
| "Custom CUDA kernels" | Phase 1, 5 | CUDA, CuTe |
| "Nsight Compute, rocprof" | Phase 2 | Profiling |
| "Fused attention kernels" | Phase 4 | Kernel Fusion, Tiling |
| "Quantized compute paths" | Phase 3, 4 | Triton, Precision |
| "Operator fusion" | Phase 4 | Fusion strategies |

**Key Projects to Build:**
1. Fused LayerNorm kernel (Triton)
2. FlashAttention variant (CuTe)
3. Quantized GEMM (INT8/FP8)

---

### ai& - Systems Engineer

**Relevant GPU Knowledge:**
- GPU topology (NVLink, PCIe)
- NUMA awareness
- CUDA driver/firmware
- Multi-GPU orchestration

**Learning:** Phase 1 + system-level CUDA context

---

## 4) Prerequisites & Gaps to Fill

### From Your Background

**Control Systems → GPU Programming:**
- ✅ Mathematical thinking (linear algebra)
- ✅ Understanding of systems and optimization
- ✅ Signal processing concepts transfer to data flow
- ⚠️ Need: C++ syntax and memory management
- ⚠️ Need: Parallel programming mindset

**TypeScript/Web → GPU Programming:**
- ✅ Python familiarity (for Triton)
- ✅ Async programming concepts
- ✅ Debugging complex systems
- ⚠️ Need: Systems programming (pointers, memory)
- ⚠️ Need: Hardware architecture knowledge

### Recommended Pre-work

**C++ Refresher (1 week):**
- Pointers and references
- Memory allocation (stack vs heap)
- Templates basics
- RAII principles

**Resources:**
- "A Tour of C++" by Bjarne Stroustrup
- CUDA C++ guide

**Linear Algebra Review:**
- Matrix multiplication
- Attention mechanism math
- Convolution as matrix multiply

---

## 5) Practical Learning Schedule

### Weekly Commitment: 10-15 hours

**Week 1-4: Foundation**
- Read PMPP Chapters 1-5
- Set up CUDA environment
- Complete: vector addition, tiled matrix multiply
- **Deliverable:** Working tiled matrix multiplication kernel

**Week 5-8: Profiling**
- Learn Nsight Compute
- Profile PyTorch ResNet or Transformer
- Identify top 3 bottlenecks
- **Deliverable:** Profile report with optimization recommendations

**Week 9-12: Triton**
- Complete Triton tutorials
- Implement softmax kernel
- Implement matrix multiplication
- **Deliverable:** Triton kernel matching PyTorch performance

**Week 13-16: Fusion**
- Study PyTorch torch.compile
- Implement fused LayerNorm
- Implement fused attention components
- **Deliverable:** Custom fused kernel library

**Week 17-24: CuTe (Advanced)**
- Study CUTLASS documentation
- Modify existing CuTe GEMM
- Implement custom tiled kernel
- **Deliverable:** Optimized kernel achieving >80% peak

---

## 6) Key Resources

### Books
- **PMPP** - Kirk & Hwu (essential)
- **CUDA by Example** - Sanders & Kandrot (practical)
- **Programming Parallel Computers** - Kjeldsen (free online)

### Online Courses
- NVIDIA DLI: Fundamentals of Accelerated Computing with CUDA
- Coursera: Heterogeneous Parallel Programming (UIUC)

### Tools & Frameworks
- **CUDA Toolkit:** https://developer.nvidia.com/cuda-toolkit
- **Triton:** pip install triton
- **CUTLASS:** https://github.com/NVIDIA/cutlass
- **Nsight Compute:** Part of CUDA toolkit

### Communities
- NVIDIA Developer Forums
- CUDA subreddit
- Triton GitHub discussions
- CUTLASS GitHub issues

---

## 7) Checkpoint Milestones

### Month 1 ✅
- [ ] Explain GPU thread hierarchy
- [ ] Write working CUDA kernel
- [ ] Understand memory coalescing

### Month 3 ✅
- [ ] Profile a real AI model
- [ ] Write Triton kernel from scratch
- [ ] Implement tiled algorithm

### Month 6 ✅
- [ ] Implement fused kernel
- [ ] Understand roofline analysis
- [ ] Optimize kernel achieving >70% peak

### Month 9 ✅
- [ ] Modify CUTLASS kernel
- [ ] Understand CuTe abstractions
- [ ] Contribute to open-source kernel library

---

## 8) Next Actions

1. **This Week:**
   - [ ] Order/download PMPP 4th edition
   - [ ] Install CUDA Toolkit
   - [ ] Run first vector addition example

2. **This Month:**
   - [ ] Complete PMPP Chapters 1-3
   - [ ] Set up profiling environment
   - [ ] Join CUDA developer community

3. **Ongoing:**
   - [ ] Weekly kernel implementation
   - [ ] Profile one AI model per month
   - [ ] Build portfolio of optimized kernels

---

## Related Notes
- [[ai-and-jobs-analysis]] - Analysis of ai& job descriptions
- [[learning-log]] - Track progress through this path
- [[triton-notes]] - Specific Triton language notes (create as you learn)

---

*Last Updated: 2026-03-25*
