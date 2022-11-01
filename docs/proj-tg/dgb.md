---
sidebar_position: 2
title: Dynamic Graph Benchmark
slug: dgb
tags: [benchmark, temporal graph, open source, datasets]
last_update:
  date: 10/28/2022
  author: Andy Huang
---


# Dynamic Graph Benchmark: Towards Better Evaluation for Dynamic Link Prediction

[![arXiv](https://img.shields.io/badge/arXiv-2205.12454-b31b1b.svg)](https://arxiv.org/pdf/2207.10128.pdf)
[![NeurIPS](https://img.shields.io/badge/NeurIPS-OpenReview-red)](https://openreview.net/forum?id=1GVpwr2Tfdg)
[![github](https://img.shields.io/badge/Github-link-lightgrey)](https://github.com/fpour/dgb)
[![medium blog](https://img.shields.io/badge/CDLab-Blog-brightgreen)](/blog/2022/10/20/dgb)


* All dynamic graph datasets can be downloaded from [here](https://zenodo.org/record/7213796#.Y1cO6y8r30o).
* The code repo can be downloaded from [here](https://github.com/fpour/dgb).
* An accompanying blog post can be found [here](/blog/2022/10/20/dgb).



## Introduction

Despite the prevalence of recent success in learning from static graphs, learning from time-evolving graphs remains an open challenge. In this work, we design new, more stringent evaluation procedures for link prediction specific to dynamic graphs, which reflect real-world considerations, to better compare the strengths and weaknesses of methods. First, we create two visualization techniques to understand the reoccurring patterns of edges over time and show that many edges reoccur at later time steps. Based on this observation, we propose a pure memorization baseline called EdgeBank. EdgeBank achieves surprisingly strong performance across multiple settings because easy negative edges are often used in current evaluation setting. To evaluate against more difficult negative edges, we introduce two more challenging negative sampling strategies that improve robustness and better match real-world applications. Lastly, we introduce six new dynamic graph datasets from a diverse set of domains missing from current benchmarks, providing new challenges and opportunities for future research.


## Project Team

* Farimah Poursafaei

* Shenyang(Andy) Huang

* Kellin Pelrine

* Abu bakar Daud

* Reihaneh Rabbany





### Contact

For more information, please contact farimah.poursafaei@mila.quebec and shenyang.huang@mail.mcgill.ca.


