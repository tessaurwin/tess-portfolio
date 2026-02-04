---
title: "Fine-Tuning a Lightweight LLM for Verilog Code Generation"
slug: "llm-verilog-generation"
date: 2025-12-02
summary: "Evaluated and fine-tuned a TinyLlama (1.1B) model with LoRA to improve Verilog HDL generation, validated using Verible, Verilator, Yosys, and randomized testbenches."
heroImage: "images/projects/llm-verilog/tiny-llama.png"
tags: ["Digital Design", "Verilog", "LLMs", "LoRA", "ML for Hardware"]
repo: "https://github.com/tessaurwin/hdlgen"
---

# Overview

This project evaluates how well a **small open-source language model** can generate **syntactically valid and synthesizable Verilog**, then improves its performance through **LoRA fine-tuning**.

We benchmarked **TinyLlama-1.1B** on a set of Verilog generation tasks, applied lightweight fine-tuning using LoRA adapters, and re-evaluated the model using industry-standard HDL tools.

The goal was not to build a perfect HDL generator, but to explore whether **small, locally-runnable models** can meaningfully assist in digital design workflows.

---

# My Role

This was a **graduate project** completed collaboratively.

I was responsible for:
- Designing the evaluation pipeline
- Implementing the HDL validation checks
- Writing the LoRA fine-tuning and generation scripts
- Running and analyzing all experiments

I did not rely on cloud-hosted models; all work was done locally.

---

# Evaluation Pipeline

For each Verilog generation task, the pipeline performs:

- **Model generation** from a structured prompt
- **Static checks**
  - Verible (syntax + formatting)
  - Verilator (compile / lint)
  - Yosys (read + synth)
- **Functional sanity checks**
  - Auto-generated randomized testbenches
  - Simulation with Icarus Verilog

All results are logged automatically to CSV summaries.

---

# Fine-Tuning Approach

We fine-tuned TinyLlama using **LoRA adapters** via Hugging Face Transformers and PEFT:

- Base model: TinyLlama-1.1B
- Training set: ~30 small HDL examples
- Training: local GPU, short runs
- Goal: improve syntactic and structural correctness

The same evaluation pipeline was run **before and after fine-tuning**.

---

# Results

Fine-tuning produced consistent improvements across all metrics:

- **Verible syntax pass rate:** 54.5% → 95.5%
- **Verilator compile:** 50.0% → 81.8%
- **Yosys synth:** 54.5% → 81.8%
- **Testbench execution:** 59.1% → 81.8%

Despite the small training set, the model showed clear gains in generating valid Verilog.

---

# Tools & Technologies

- Verilog / SystemVerilog
- Python
- Hugging Face Transformers
- PEFT / LoRA
- Verible
- Verilator
- Yosys
- Icarus Verilog

---

# Why This Project Matters

This project sits at the intersection of **digital hardware design and applied machine learning**.

It demonstrates:
- How HDL generation can be **evaluated rigorously**, not just by syntax
- That even **small models** can be meaningfully improved
- A realistic, tool-driven approach to ML-assisted hardware design

This work deepened my interest in **design automation, verification, and ML-assisted EDA workflows**.