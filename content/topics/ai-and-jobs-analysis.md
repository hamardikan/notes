---
title: ai& Company Job Analysis
created: 2026-03-25
tags: [jobs, ai-infrastructure, career, gpu, kernel-optimization]
---

# ai& Company Job Analysis

## Company Overview

**ai&** is a global AI technology company focused on:
1. **AI Lab:** Specializing in localization
2. **Infrastructure Provider:** Global compute and data centers
3. **Full Stack Ownership:** Believes in owning the stack top-to-bottom

**Locations:** Tokyo, SF, Austin, Toronto (global hiring)
**Culture:** Small autonomous teams, high personal agency, mission-driven

---

## Job Roles Analysis

### 1. Member of Technical Staff - Inference Optimization

**Focus:** Extract maximum performance from GPU hardware

**Key Responsibilities:**
- Write custom CUDA and ROCm/HIP kernels
- Profile with Nsight Compute, rocprof, Perfetto, VTune
- Optimize attention mechanisms (Flash Attention, MLA, paged attention)
- Work with quantization (INT8, FP8, AWQ, GPTQ)
- Fuse operators to reduce memory round-trips
- Optimize collective communication (AllReduce, AllGather)

**Required Technical Skills:**
- Deep CUDA/ROCm kernel authorship
- GPU architecture knowledge (Hopper/Ampere, CDNA)
- Profiling tool fluency
- Numerical precision expertise (FP16, BF16, FP8)
- Parallel programming (CUDA, Triton, SYCL)

**Your Learning Path:**
- Phase 1-5 of GPU learning path
- Focus: CuTe/CUTLASS for peak performance
- Critical: Profiling and bottleneck analysis

**Difficulty for Your Background:** ⭐⭐⭐⭐⭐ Very Hard
**Time to Competency:** 12-18 months
**Priority:** High - Core technical role

---

### 2. Member of Technical Staff - Inference Serving

**Focus:** Build high-performance multi-tenant serving stack

**Key Responsibilities:**
- Evaluate and tune inference frameworks (vLLM, TensorRT-LLM, etc.)
- Optimize latency (TTFT/ITL) vs throughput trade-offs
- Implement disaggregated prefill/decode, speculative decoding
- Manage KV-cache for multi-turn conversations
- Support Day 0 model releases
- Bridge small clusters to massive multi-node deployments

**Required Technical Skills:**
- Deep experience with inference engines
- Understanding of "Inference Triangle" (latency/throughput/quality)
- Multimodal model serving (Video, Vision)
- Distributed systems at scale

**Your Learning Path:**
- Phase 1-3 of GPU learning path
- Focus: Triton, PyTorch internals
- Study: vLLM, continuous batching, paged attention

**Difficulty for Your Background:** ⭐⭐⭐⭐ Hard
**Time to Competency:** 9-12 months
**Priority:** High - Close to kernel optimization

---

### 3. Member of Technical Staff - Systems

**Focus:** Bare-metal infrastructure and GPU systems

**Key Responsibilities:**
- Configure and manage bare-metal servers
- OS tuning, driver management, firmware
- Rack-scale GPU systems (NVL72, AMD Helios)
- GPU topology (NVLink, NVSwitch, MI-series)
- Performance optimization at system level

**Required Technical Skills:**
- Linux internals, kernel parameters
- NUMA topology, PCIe configurations
- CUDA driver/firmware management
- High-density GPU system operations

**Your Learning Path:**
- Phase 1 of GPU learning path
- Linux system administration
- Hardware architecture study

**Difficulty for Your Background:** ⭐⭐⭐ Medium
**Time to Competency:** 6-9 months
**Priority:** Medium - Good entry point

**Why This Fits You:**
- Leverages systems thinking from control engineering
- Less deep kernel programming required
- Strong foundation for moving to optimization later

---

### 4. Member of Technical Staff - Networking

**Focus:** Lossless networking fabrics for GPU clusters

**Key Responsibilities:**
- Design RoCE v2 and InfiniBand fabrics
- Tune NCCL for distributed AI workloads
- Optimize collective communications (AllReduce, AllGather)
- Network topology design (fat-tree, rail-optimized)
- Congestion control and zero packet loss

**Required Technical Skills:**
- AI networking expertise (InfiniBand, RoCE v2)
- NCCL tuning
- NIC/DPU configuration (ConnectX, Bluefield)
- Network architecture at scale

**Your Learning Path:**
- Networking fundamentals
- RDMA and InfiniBand concepts
- NCCL and collective communication patterns
- GPU topology integration

**Difficulty for Your Background:** ⭐⭐⭐⭐ Hard
**Time to Competency:** 9-12 months
**Priority:** Medium - Specialized but critical

**Why This Fits You:**
- Control systems background → network control theory
- Systems thinking applies to network optimization
- Less code-heavy than kernel optimization

---

### 5. Member of Technical Staff - Post Training

**Focus:** RL and post-training pipelines

**Key Responsibilities:**
- Build post-training infrastructure (SFT, preference alignment)
- Run RL training experiments
- Design synthetic data pipelines
- Enterprise customer post-training engagements
- Continual learning without catastrophic forgetting

**Required Technical Skills:**
- RL implementation on language models
- PyTorch, DeepSpeed, FSDP, vLLM
- Data generation and quality assessment
- Evaluation pipeline design

**Your Learning Path:**
- RL fundamentals (PPO, reward models)
- PyTorch training infrastructure
- Less focus on low-level GPU kernels

**Difficulty for Your Background:** ⭐⭐⭐ Medium
**Time to Competency:** 6-9 months
**Priority:** Medium - ML focus, less systems

---

### 6. Member of Technical Staff - Applied & Agentic AI

**Focus:** Build agentic layer and frameworks

**Key Responsibilities:**
- Integrate agentic frameworks (LangGraph, AutoGen, MCP)
- Build deployment tooling for agents
- Design custom agentic workflows
- Model evaluation and QA
- Developer experience for agent deployment

**Required Technical Skills:**
- Agentic framework experience
- Applied ML fluency (prompting, chaining)
- Evaluation pipeline design
- Full-stack development
- Python, agentic frameworks

**Your Learning Path:**
- Agentic AI frameworks
- LangGraph, AutoGen tutorials
- Less GPU kernel programming

**Difficulty for Your Background:** ⭐⭐ Easy
**Time to Competency:** 3-6 months
**Priority:** Low - Not aligned with kernel optimization goals

**Note:** This is furthest from your GPU learning path but easiest transition.

---

### 7. Member of Technical Staff - Applied AI Engineer (Internal Tools)

**Focus:** AI-powered internal tooling

**Key Responsibilities:**
- Build AI-powered internal tools
- Deploy agentic workflows internally
- Cross-functional automation (finance, ops, HR)
- Tool evaluation and iteration

**Required Technical Skills:**
- Applied AI engineering
- Full-stack development
- Agentic framework fluency
- Cross-functional collaboration

**Your Learning Path:**
- Similar to Applied & Agentic AI role
- Focus on internal tooling patterns

**Difficulty for Your Background:** ⭐⭐ Easy
**Time to Competency:** 3-6 months
**Priority:** Low - Not aligned with kernel optimization goals

---

## Strategic Analysis

### Best Roles for Your Goals

If you want to learn GPU/kernel optimization:

| Rank | Role | Relevance | Difficulty | Why |
|------|------|-----------|------------|-----|
| 1 | **Inference Optimization** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Direct kernel programming |
| 2 | **Inference Serving** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Close to kernels, systems thinking |
| 3 | **Systems** | ⭐⭐⭐ | ⭐⭐⭐ | Good foundation, can transition |
| 4 | **Networking** | ⭐⭐⭐ | ⭐⭐⭐⭐ | Systems thinking, less code-heavy |

### Career Progression Path

**Recommended Strategy:**

```
Entry Point: Systems Engineer (6-9 months)
    ↓ Learn GPU topology, CUDA drivers, hardware
Transition: Inference Serving (9-12 months)
    ↓ Learn inference engines, optimization basics
Target: Inference Optimization (12-18 months)
    ↓ Deep kernel programming, CuTe, peak performance
```

**Alternative Fast Track:**
```
Entry Point: Applied AI Engineer (3-6 months)
    ↓ Learn AI/ML workflows, Python ecosystem
Transition: Inference Serving (parallel study)
    ↓ Study GPU programming alongside work
Target: Inference Optimization (12-15 months total)
```

---

## Technical Skills Matrix

### Core Skills Across Roles

| Skill | Inf Opt | Inf Serve | Systems | Net | Post Train | Agentic | Internal |
|-------|---------|-----------|---------|-----|------------|---------|----------|
| CUDA Kernels | ⭐⭐⭐ | ⭐⭐ | ⭐ | - | - | - | - |
| Profiling | ⭐⭐⭐ | ⭐⭐ | ⭐ | ⭐ | ⭐ | - | - |
| GPU Architecture | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐ | - | - |
| Triton | ⭐⭐⭐ | ⭐⭐ | - | - | ⭐ | - | - |
| CuTe/CUTLASS | ⭐⭐⭐ | ⭐ | - | - | - | - | - |
| Python/PyTorch | ⭐⭐ | ⭐⭐⭐ | ⭐ | ⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Linux Systems | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐ | ⭐ |
| Networking | ⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐ | - | - |
| RL/Training | ⭐ | ⭐ | - | - | ⭐⭐⭐ | - | - |
| Agents/Frameworks | - | - | - | - | ⭐ | ⭐⭐⭐ | ⭐⭐⭐ |

---

## What "Own the Stack" Means

ai& believes in vertical integration:

```
┌─────────────────────────────────────┐
│  AI Models & Applications           │ ← Agentic AI roles
├─────────────────────────────────────┤
│  Post-Training & RL                 │ ← Post Training role
├─────────────────────────────────────┤
│  Inference Serving & Optimization   │ ← Inference roles
├─────────────────────────────────────┤
│  Kernel & GPU Optimization          │ ← Inference Optimization
├─────────────────────────────────────┤
│  Networking Fabric                  │ ← Networking role
├─────────────────────────────────────┤
│  Systems & Bare Metal               │ ← Systems role
├─────────────────────────────────────┤
│  Data Centers & Infrastructure      │ ← Systems role
└─────────────────────────────────────┘
```

**Your Target:** Deep expertise in Kernel/GPU Optimization layer, with understanding of adjacent layers.

---

## Learning Priorities Based on Roles

### Priority 1: Essential for Inference Optimization
- PMPP textbook (complete)
- CUDA kernel programming
- Nsight Compute profiling
- Triton language
- CuTe/CUTLASS
- GPU architecture (Hopper/Ampere)

### Priority 2: Important for Multiple Roles
- Linux systems programming
- PyTorch internals
- NCCL and distributed computing
- Python optimization

### Priority 3: Nice to Have
- Agentic frameworks (LangGraph)
- RL fundamentals
- Multimodal model serving
- Web development (TypeScript already known)

---

## Recommended Application Strategy

### Timeline: 12-18 months to readiness

**Months 1-6: Foundation**
- Study PMPP, basic CUDA
- Build kernel portfolio
- Profile existing AI models
- Contribute to open-source (Triton, CUTLASS)

**Months 6-12: Intermediate**
- Master Triton
- Implement FlashAttention components
- Study inference engines (vLLM)
- Build fused kernel library

**Months 12-18: Advanced**
- Deep CuTe expertise
- Optimize kernels achieving 80%+ peak
- Profile and optimize real models
- Create technical blog/portfolio

### Application Targets

**Phase 1 (Month 6-9):** Systems Engineer
- Easier entry point
- Learn company stack
- Transition to optimization

**Phase 2 (Month 12-15):** Inference Optimization
- Target role
- Deep technical work
- Maximum learning

---

## Related Notes
- [[gpu-cuda-learning-path]] - Detailed learning roadmap
- [[learning-log]] - Track your progress
- [[triton-notes]] - Triton-specific notes

---

*Last Updated: 2026-03-25*
