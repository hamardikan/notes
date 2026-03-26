---
title: GPU Kernel Optimization - Complete Reading Materials
created: 2026-03-25
tags: [gpu, cuda, reading-list, resources, papers, tutorials]
---

# GPU Kernel Optimization - Complete Reading Materials

Comprehensive reading list for learning GPU kernel optimization, profiling, and AI infrastructure. Organized by topic with direct links.

---

## 1. PMPP - Programming Massively Parallel Processors

### Primary Textbook
- **Title:** Programming Massively Parallel Processors: A Hands-on Approach
- **Authors:** David B. Kirk, Wen-mei W. Hwu
- **Edition:** 4th Edition (recommended)
- **Publisher:** Morgan Kaufmann
- **Where to get:**
  - Amazon: https://www.amazon.com/Programming-Massively-Parallel-Processors-Hands/dp/0323912311
  - Publisher: https://www.elsevier.com/books/programming-massively-parallel-processors/kirk/978-0-323-91231-0
  - GitHub code examples: https://github.com/parallel-programming-patterns/pmpp-book-examples

### Supplementary Materials
- **NVIDIA CUDA C Programming Guide:** https://docs.nvidia.com/cuda/cuda-c-programming-guide/
- **CUDA by Example (Book):** Jason Sanders, Edward Kandrot
- **Programming Parallel Computers (Free Online):** https://pcms.gitlab.io/

---

## 2. CUDA Toolkit & Development Environment

### Official Resources
- **CUDA Toolkit Download:** https://developer.nvidia.com/cuda-downloads
- **CUDA Documentation:** https://docs.nvidia.com/cuda/
- **CUDA C++ Programming Guide:** https://docs.nvidia.com/cuda/cuda-c-programming-guide/
- **CUDA Samples:** https://github.com/NVIDIA/cuda-samples
- **CUDA Math API:** https://docs.nvidia.com/cuda/cuda-math-api/

### Video Tutorials
- **Accelerating Applications With Parallel Algorithms (2+ hours):** https://www.youtube.com/watch?v=H3AQnlpxk0c
- **CUDA Upgrades for Jetson Devices:** https://www.youtube.com/watch?v=_JgNA82325I
- **Profiling and Debugging Applications:** https://www.youtube.com/watch?v=dB5Jxwj0PDw
- **Installing CUDA Toolkit on Windows and WSL:** https://www.youtube.com/watch?v=JaHVsZa2jTc

### GTC (GPU Technology Conference) Sessions
- **What's CUDA All About Anyway?** https://www.nvidia.com/en-us/on-demand/session/gtc25-S72571/
- **CUDA—New Features and Beyond:** https://www.nvidia.com/en-us/on-demand/session/gtc25-s72383/
- **How to Write a CUDA Program:** https://www.nvidia.com/en-us/on-demand/session/gtc25-s72897/

---

## 3. GPU Profiling Tools

### NVIDIA Nsight Compute
- **Documentation:** https://docs.nvidia.com/nsight-compute/
- **Profiling Guide:** https://docs.nvidia.com/nsight-compute/ProfilingGuide/index.html
- **CLI Documentation:** https://docs.nvidia.com/nsight-compute/NsightComputeCli/index.html
- **Python Report Interface:** https://docs.nvidia.com/nsight-compute/PythonReportInterface/index.html
- **Occupancy Calculator:** https://docs.nvidia.com/nsight-compute/OccupancyCalculatorPythonInterface/index.html

### AMD ROCm Profiling (rocprof)
- **ROCprofiler-SDK Documentation:** https://rocm.docs.amd.com/projects/rocprofiler-sdk/en/latest/
- **rocprofv3 User Guide:** https://rocm.docs.amd.com/projects/rocprofiler-sdk/en/latest/how-to/using-rocprofv3.html
- **Quick Reference:** https://rocm.docs.amd.com/projects/rocprofiler-sdk/en/latest/quick_guide.html
- **GitHub Repository:** https://github.com/ROCm/rocprofiler-sdk

### Other Profiling Tools
- **Perfetto (Google):** https://perfetto.dev/
- **Intel VTune Profiler:** https://www.intel.com/content/www/us/en/developer/tools/oneapi/vtune-profiler.html
- **Roofline Model Paper:** https://arxiv.org/abs/2006.12643

### Profiling Tutorials
- **Nsight Compute Training:** https://developer.nvidia.com/nsight-compute-training
- **Roofline Analysis Tutorial:** https://www.nersc.gov/users/application-performance/roofline/

---

## 4. Triton - Python GPU Programming

### Official Documentation
- **Triton Documentation:** https://triton-lang.org/main/
- **GitHub Repository:** https://github.com/triton-lang/triton
- **OpenAI Triton Blog Post:** https://openai.com/index/triton/
- **Triton Semantics:** https://triton-lang.org/main/python-api/triton-semantics.html

### Tutorials (Step-by-Step)
1. **Vector Addition:** https://triton-lang.org/main/getting-started/tutorials/01-vector-add.html
2. **Fused Softmax:** https://triton-lang.org/main/getting-started/tutorials/02-fused-softmax.html
3. **Matrix Multiplication:** https://triton-lang.org/main/getting-started/tutorials/03-matrix-multiplication.html
4. **Low-Memory Dropout:** https://triton-lang.org/main/getting-started/tutorials/04-low-memory-dropout.html
5. **Layer Normalization:** https://triton-lang.org/main/getting-started/tutorials/05-layer-norm.html
6. **Fused Attention:** https://triton-lang.org/main/getting-started/tutorials/06-fused-attention.html
7. **Grouped GEMM:** https://triton-lang.org/main/getting-started/tutorials/08-grouped-gemm.html
8. **Persistent Matmul:** https://triton-lang.org/main/getting-started/tutorials/09-persistent-matmul.html
9. **Block Scaled Matmul:** https://triton-lang.org/main/getting-started/tutorials/10-block-scaled-matmul.html

### Programming Guide
- **Introduction:** https://triton-lang.org/main/programming-guide/chapter-1/introduction.html
- **Related Work:** https://triton-lang.org/main/programming-guide/chapter-2/related-work.html
- **Debugging Triton:** https://triton-lang.org/main/programming-guide/chapter-3/debugging.html

### Download Tutorial Code
- **Python Source:** https://triton-lang.org/main/_downloads/763344228ae6bc253ed1a6cf586aa30d/tutorials_python.zip
- **Jupyter Notebooks:** https://triton-lang.org/main/_downloads/662999063954282841dc90b8945f85ce/tutorials_jupyter.zip

---

## 5. CuTe & CUTLASS - High Performance CUDA

### CUTLASS Repository
- **GitHub:** https://github.com/NVIDIA/cutlass
- **Documentation:** https://docs.nvidia.com/cutlass/
- **Quick Start (C++):** https://docs.nvidia.com/cutlass/latest/media/docs/cpp/quickstart.html
- **Quick Start (Python DSL):** https://docs.nvidia.com/cutlass/latest/media/docs/pythonDSL/quick_start.html

### CuTe Documentation
- **CuTe Quick Start:** https://docs.nvidia.com/cutlass/latest/media/docs/cpp/cute/00_quickstart.html
- **CUTLASS 3.x Design:** https://docs.nvidia.com/cutlass/latest/media/docs/cpp/cutlass_3x_design.html
- **GEMM API 3.x:** https://docs.nvidia.com/cutlass/latest/media/docs/cpp/gemm_api_3x.html
- **Functionality Guide:** https://docs.nvidia.com/cutlass/latest/media/docs/cpp/functionality.html
- **Efficient GEMM in CUDA:** https://docs.nvidia.com/cutlass/latest/media/docs/cpp/efficient_gemm.html

### Example Code
- **CUTLASS Examples:** https://github.com/NVIDIA/cutlass/tree/main/examples
- **CuTe DSL Examples:** https://github.com/NVIDIA/cutlass/tree/main/examples/python/CuTeDSL
- **Blackwell Kernels:** https://github.com/NVIDIA/cutlass/tree/main/examples/python/CuTeDSL/blackwell
- **FlashAttention CuTe:** https://github.com/NVIDIA/cutlass/tree/main/examples/55_hopper_mixed_dtype_gemm

### GTC Talks on CUTLASS
- **CUTLASS: Software Primitives for Dense Linear Algebra (GTC 2018):** https://www.nvidia.com/en-us/on-demand/session/gtcsiliconvalley2018-s8854/
- **Pushing Tensor Cores to the Limit (GTC 2020):** https://www.nvidia.com/en-us/on-demand/session/gtcsj20-s21745/
- **Accelerating Convolution with Tensor Cores (GTC 2021):** https://www.nvidia.com/en-us/on-demand/session/gtcspring21-s31883/
- **Backward Data Gradient Optimization (GTC 2022):** https://www.nvidia.com/en-us/on-demand/session/gtcspring22-s41996/
- **Python API and Hopper (GTC 2022):** https://www.nvidia.com/en-us/on-demand/session/gtcfall22-a41131/

---

## 6. FlashAttention - Optimized Attention Kernels

### Papers
1. **FlashAttention (NeurIPS 2022):**
   - arXiv: https://arxiv.org/abs/2205.14135
   - PDF: https://arxiv.org/pdf/2205.14135

2. **FlashAttention-2 (ICLR 2024):**
   - Paper: https://tridao.me/publications/flash2/flash2.pdf
   - Blog: https://tridao.me/blog/2023/flash2/

3. **FlashAttention-3 (for Hopper H100):**
   - Paper: https://tridao.me/publications/flash3/flash3.pdf
   - Blog: https://tridao.me/blog/2024/flash3/

### Implementation
- **GitHub Repository:** https://github.com/Dao-AILab/flash-attention
- **Documentation:** https://github.com/Dao-AILab/flash-attention/blob/main/README.md
- **Usage Guide:** https://github.com/Dao-AILab/flash-attention/blob/main/usage.md
- **Triton Implementation:** https://github.com/triton-lang/triton/blob/main/python/tutorials/06-fused-attention.py

### FlashAttention-4 (CuTe DSL)
- **Installation:** `pip install flash-attn-4`
- **PyTorch Integration:**
  ```python
  from flash_attn.cute import flash_attn_func
  out = flash_attn_func(q, k, v, causal=True)
  ```

---

## 7. Kernel Fusion & Optimization

### PyTorch torch.compile
- **torch.compile Introduction:** https://pytorch.org/tutorials/recipes/torch_compile_intro.html
- **PyTorch 2.0 Release Notes:** https://pytorch.org/blog/pytorch-2.0-release/
- **Inductor Backend:** https://pytorch.org/tutorials/intermediate/inductor_debug_cpu.html

### XLA (Accelerated Linear Algebra)
- **XLA Documentation:** https://www.tensorflow.org/xla
- **Fusion Documentation:** https://www.tensorflow.org/xla/fusion

### Research Papers on Fusion
- **XLA: Optimizing Compiler for Machine Learning:** https://arxiv.org/abs/2009.00102
- **Tensor Comprehensions (Facebook):** https://arxiv.org/abs/1802.04730
- **TVM: An Automated End-to-End Optimizing Compiler:** https://arxiv.org/abs/1802.04799

---

## 8. Inference Serving & vLLM

### vLLM (High-Throughput LLM Serving)
- **GitHub Repository:** https://github.com/vllm-project/vllm
- **Documentation:** https://docs.vllm.ai/
- **Blog (PagedAttention):** https://blog.vllm.ai/2023/06/20/vllm.html
- **Paper:** https://arxiv.org/abs/2309.06180

### Key Concepts
- **PagedAttention:** Memory-efficient attention for serving
- **Continuous Batching:** Dynamic batching for inference
- **Speculative Decoding:** Draft-then-verify for faster generation

### Other Inference Engines
- **TensorRT-LLM (NVIDIA):** https://github.com/NVIDIA/TensorRT-LLM
- **DeepSpeed Inference:** https://www.deepspeed.ai/tutorials/inference-tutorial/
- **Text Generation Inference (HuggingFace):** https://github.com/huggingface/text-generation-inference

---

## 9. NCCL - Collective Communications

### Documentation
- **NCCL User Guide:** https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/
- **NCCL API Reference:** https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/api.html
- **NCCL Environment Variables:** https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/env.html

### Key Topics
- **AllReduce:** https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/usage/collectives.html#allreduce
- **AllGather:** https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/usage/collectives.html#allgather
- **ReduceScatter:** https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/usage/collectives.html#reducescatter
- **Point-to-Point:** https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/usage/p2p.html

### Examples
- **NCCL Examples:** https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/examples.html
- **NCCL and MPI:** https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/mpi.html

---

## 10. GPU Architecture Deep Dive

### PTX (Parallel Thread Execution)
- **PTX ISA Documentation:** https://docs.nvidia.com/cuda/parallel-thread-execution/
- **PTX ISA 9.2:** https://docs.nvidia.com/cuda/parallel-thread-execution/index.html
- **Warp-Level Matrix Instructions:** https://docs.nvidia.com/cuda/parallel-thread-execution/index.html#warp-level-matrix-instructions

### GPU Architecture Guides
- **NVIDIA Hopper Architecture:** https://www.nvidia.com/en-us/data-center/hopper/
- **NVIDIA Ampere Architecture:** https://www.nvidia.com/en-us/data-center/ampere-architecture/
- **CUDA Programming Model:** https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#programming-model

### Tensor Cores
- **Tensor Core Guide:** https://developer.nvidia.com/blog/programming-tensor-cores-cuda-9/
- **Mixed Precision Training:** https://docs.nvidia.com/deeplearning/performance/mixed-precision-training/index.html

---

## 11. Quantization & Precision

### Mixed Precision
- **NVIDIA Mixed Precision Training:** https://docs.nvidia.com/deeplearning/performance/mixed-precision-training/index.html
- **TF32 Format:** https://blogs.nvidia.com/blog/tensorfloat-32-precision-format/
- **FP8 Format:** https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/index.html

### Quantization Libraries
- **AutoAWQ:** https://github.com/casper-hansen/AutoAWQ
- **AutoGPTQ:** https://github.com/PanQiWei/AutoGPTQ
- **BitsAndBytes:** https://github.com/TimDettmers/bitsandbytes
- **Transformer Engine:** https://github.com/NVIDIA/TransformerEngine

---

## 12. ROCm/HIP for AMD GPUs

### ROCm Documentation
- **ROCm Documentation:** https://rocm.docs.amd.com/
- **HIP Programming Guide:** https://rocm.docs.amd.com/projects/HIP/en/latest/
- **ROCm Profiler:** https://rocm.docs.amd.com/projects/rocprofiler-sdk/en/latest/

### AMD GPU Programming
- **Composable Kernel:** https://github.com/ROCm/composable_kernel
- **FlashAttention for ROCm:** https://github.com/ROCm/flash-attention
- **aiter (Triton for AMD):** https://github.com/ROCm/aiter

---

## 13. Online Courses & Training

### NVIDIA Deep Learning Institute (DLI)
- **Fundamentals of Accelerated Computing with CUDA:** https://www.nvidia.com/dli/
- **CUDA Training:** https://developer.nvidia.com/accelerated-computing-training

### University Courses
- **Heterogeneous Parallel Programming (UIUC):** https://www.coursera.org/learn/heterogeneous-parallel-programming
- **GPU Programming (Cornell):** https://www.cs.cornell.edu/courses/cs5220/2020fa/
- **CS 217 GPU Architecture:** http://cs217.stanford.edu/

### YouTube Channels
- **NVIDIA Developer:** https://www.youtube.com/nvidiadeveloper
- **GTC Sessions:** https://www.nvidia.com/en-us/on-demand/
- **CUDA Programming Playlist:** https://www.youtube.com/playlist?list=PL6wLL0M6g1Z7g7fL3-9e1N2lC3K4k1e2a

---

## 14. Communities & Forums

### Discussion Forums
- **NVIDIA Developer Forums (CUDA):** https://forums.developer.nvidia.com/c/accelerated-computing/cuda/206
- **Triton GitHub Discussions:** https://github.com/triton-lang/triton/discussions
- **CUTLASS GitHub Issues:** https://github.com/NVIDIA/cutlass/issues
- **r/CUDA (Reddit):** https://www.reddit.com/r/CUDA/
- **vLLM Slack:** https://slack.vllm.ai

### Stack Overflow
- **CUDA Tag:** https://stackoverflow.com/questions/tagged/cuda
- **Triton Tag:** https://stackoverflow.com/questions/tagged/triton
- **GPU Programming:** https://stackoverflow.com/questions/tagged/gpu

---

## 15. Papers & Research

### Must-Read Papers

**GPU Programming & Optimization:**
1. **FlashAttention (NeurIPS 2022):** https://arxiv.org/abs/2205.14135
2. **FlashAttention-2 (ICLR 2024):** https://tridao.me/publications/flash2/flash2.pdf
3. **FlashAttention-3:** https://tridao.me/publications/flash3/flash3.pdf
4. **PagedAttention (SOSP 2023):** https://arxiv.org/abs/2309.06180

**Kernel Fusion:**
5. **XLA: Optimizing Compiler:** https://arxiv.org/abs/2009.00102
6. **Tensor Comprehensions:** https://arxiv.org/abs/1802.04730
7. **TVM: Automated Optimization:** https://arxiv.org/abs/1802.04799

**Matrix Multiplication:**
8. **CUTLASS Paper:** https://arxiv.org/abs/1902.04615
9. **Strassen's Algorithm GPU:** https://arxiv.org/abs/1708.07469

**Distributed Training:**
10. **Megatron-LM:** https://arxiv.org/abs/1909.08053
11. **DeepSpeed:** https://arxiv.org/abs/2201.05596

---

## 16. Practice Projects & Exercises

### Beginner Projects
1. **Vector Addition:** CUDA version, Triton version
2. **Matrix Multiplication:** Naive, Tiled, cuBLAS comparison
3. **Softmax:** Standard vs Fused implementation
4. **Reduction:** Sum, Max, Min operations

### Intermediate Projects
1. **GEMM Optimized:** Achieve >80% of cuBLAS performance
2. **LayerNorm Fusion:** Combine mean, std, scale, shift
3. **Attention Kernel:** Implement manual attention
4. **FlashAttention Implementation:** From paper to code

### Advanced Projects
1. **Custom CuTe GEMM:** Using CUTLASS templates
2. **Multi-GPU AllReduce:** Using NCCL
3. **Quantized GEMM:** INT8/FP8 implementation
4. **Speculative Decoding:** Draft model implementation

### Open Source Contributions
- **Triton Issues:** https://github.com/triton-lang/triton/issues
- **CUTLASS Contributions:** https://github.com/NVIDIA/cutlass/blob/main/CONTRIBUTING.md
- **vLLM Contributions:** https://docs.vllm.ai/en/latest/contributing/index.html
- **FlashAttention Issues:** https://github.com/Dao-AILab/flash-attention/issues

---

## 17. Cheat Sheets & Quick References

### CUDA Cheatsheets
- **CUDA C++ Quick Reference:** https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#quick-reference
- **Nsight Compute Metrics:** https://docs.nvidia.com/nsight-compute/ProfilingGuide/index.html#metrics
- **NCCL Quick Start:** https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/overview.html

### PTX Quick Reference
- **PTX ISA Quick Reference:** https://docs.nvidia.com/cuda/parallel-thread-execution/index.html#instruction-set

---

## 18. Hardware Specifications

### GPU Specs
- **NVIDIA H100:** https://www.nvidia.com/en-us/data-center/h100/
- **NVIDIA A100:** https://www.nvidia.com/en-us/data-center/a100/
- **NVIDIA RTX 4090:** https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/

### Architecture Comparison
- **Compute Capability:** https://developer.nvidia.com/cuda-gpus
- **Memory Bandwidth Tables:** https://en.wikipedia.org/wiki/List_of_Nvidia_graphics_processing_units

---

## 19. Interview Preparation

### Topics to Master
1. GPU memory hierarchy (HBM, L2, Shared, Registers)
2. Thread organization (Grid, Block, Warp, Thread)
3. Memory coalescing patterns
4. Occupancy calculation
5. Roofline analysis
6. Tiling strategies
7. Bank conflicts in shared memory
8. Tensor Core usage

### Practice Questions
- Implement tiled matrix multiplication
- Optimize a given kernel for memory bandwidth
- Explain FlashAttention algorithm
- Design a fused kernel for LayerNorm
- Profile and optimize a PyTorch model

---

## 20. Tracking Progress

### Recommended Reading Order

**Week 1-4: Foundation**
1. PMPP Chapters 1-5
2. CUDA C++ Programming Guide
3. Install CUDA Toolkit and run samples

**Week 5-8: Profiling**
4. Nsight Compute documentation
5. Profile simple kernels
6. Roofline analysis paper

**Week 9-12: Triton**
7. All Triton tutorials
8. Implement softmax and matmul in Triton
9. FlashAttention Triton implementation

**Week 13-16: Kernel Fusion**
10. PyTorch torch.compile docs
11. XLA fusion paper
12. Implement fused kernels

**Week 17-24: CUTLASS/CuTe**
13. CUTLASS documentation
14. CuTe examples
15. Implement custom GEMM

**Ongoing:**
16. Read one paper per week
17. Contribute to open source
18. Build portfolio projects

---

## Notes

- **Last Updated:** 2026-03-25
- **Total Resources:** 150+ links
- **Estimated Study Time:** 500+ hours
- **Difficulty Level:** Beginner to Expert

### Related Notes
- [[gpu-cuda-learning-path]] - Structured learning roadmap
- [[ai-and-jobs-analysis]] - Job requirements analysis
- [[triton-notes]] - Personal Triton notes (create as you learn)

---

*This is a living document. Add new resources as you discover them.*
