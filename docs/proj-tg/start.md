---
# sidebar_position: 1
title: Get Started
slug: get started 
tags: [tutorial, benchmark, temporal graph, open source, datasets]
last_update:
  date: 10/28/2022
  author: Andy Huang
---

## How to start using DGB package


#### 1. download from [*pip*](https://pypi.org/project/dgb/)
```
pip install DGB
```

#### 2. download dataset
```
from DGB.download import TemporalDataSets

data_name = "enron"  #specify the dataset name you want to download here
enron = DGB.TemporalDataSets(data_name="enron")
```

list all available datasets
```
data_list = DGB.list_all()
print (data_list) 

#currently supports all datasets from our paper "Towards Better Evaluation for Dynamic Link Prediction"
#["canparl", "contacts", "enron", "flights", "lastfm", "mooc", "reddit", "socialEvo", "UCI", "un_trade", "un_vote", "us_Legis", "wikipedia"]
```


#### 3. process the dataset into ML ready format and obtain train, val, test split
```
enron_tgb = enron.process()
train_data = enron_tgb["train"]   
test_data = enron_tgb["test"]
val_data = enron_tgb["validation"]
```

#### 4. Design your own Temporal Graph Learning Model, or use existing ones

For example methods, please see [github](https://github.com/fpour/DGB)

#### 5. Evaluate your method with our provided evaluator

```
"""
A code snipet to check the evaluator functionality
Please consider this code only as an example, and feel free to modify it according to your requirements
"""

evaluator = DGB.Evaluator()

# y_true & y_pred: ndarray of shape (n_samples,)
# y_true: shows the status of existence of an edge: 0: negative edge, 1: positive edge
# y_pred: the probability of existence of an edge; output of a dynamic graph learning model

# here, we randomly generate two arrays to check the evaluator functionality
np.random.seed(42)
y_true = np.random.randint(2, size=100)
y_pred = np.random.random_sample((100,))

# the evaluation metrics should be in the following list (note: it should be passed as a list)
evaluation_metric_list = ['ap', 'au_roc_score', 'au_pr_score', 'acc', 'prec', 'rec', 'f1']
input_dict = {'y_true': y_true,
              'y_pred': y_pred,
              'eval_metric': evaluation_metric_list
              }
eval_result = evaluator.eval(input_dict, verbose=True)
print(eval_result)
```

#### Cite Our Work 

If you find the code or datasets useful for your research, please consider citing us:
```text
@inproceedings{poursafaeitowards,
  title={Towards Better Evaluation for Dynamic Link Prediction},
  author={Poursafaei, Farimah and Huang, Andy and Pelrine, Kellin and Rabbany, Reihaneh},
  booktitle={Thirty-sixth Conference on Neural Information Processing Systems Datasets and Benchmarks Track},
  year={2022}
}
```



