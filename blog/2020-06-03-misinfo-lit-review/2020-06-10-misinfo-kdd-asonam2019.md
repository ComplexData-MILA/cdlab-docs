---
title: "KDD + ASONAM 2019 Misinformation Papers"
slug: misinfo/part1
authors: 
  - kellin
tags:
  - misinformation
  - kdd
  - asnoam
  - knowledge discovery
  - data mining
  - advances in social networks mining and analysis
  - literature review
  - fake news
---

This post is part of a literature review on misinformation, especially in relation to technology and social media. The intention is to organize my thoughts and to provide the reader with condensed information beyond what can be found in the abstract.

<!--truncate-->

import { Paper } from './components.js'


For each paper I give the setting, main contributions, data used, and some strengths and limitations. These opinions are my own and are presented to give the reader some ideas. They do not represent an ironclad critical review; your judgment may vary, and so might mine on subsequent readings. Also, my depth of reading varies depending on relevance to our research - some papers that weren’t very relevant are marked below as skimmed or not read at all.

The following are from [searching](https://dl.acm.org/action/doSearch?AllField=misinformation&amp;expand=all&amp;ConceptID=119664&amp;AfterYear=2019&amp;BeforeYear=2019&amp;queryID=30/815270665) for the keyword **"misinformation,"** among **2019 KDD** (Knowledge Discovery and Data Mining), **ASONAM** (Advances in Social Networks Mining and Analysis) papers. The latter conference accepts two submission formats; I indicate them here by the title as “short” (4 pages or less) and “long” (8 pages or less).

**18 results total.** Results are ordered here according to the search results order.

<Paper title="Online Misinformation: From the Deceiver to the Victim (ASONAM short)" link="https://dl.acm.org/doi/pdf/10.1145/3341161.3343536">
  <p> <i>Setting:</i> examines properties of fake news publishers, spreaders, and victims. </p>
  <p> <i>Main contributions:</i> partisanship of publishers is partially predictive of fakeness (more partisan → more fake). Aggregate network properties are slightly predictive of fake news spreaders. Dissemination and vulnerability to fake news among seniors is significant and has not been sufficiently studied compared to other groups. </p>
  <p> <i>Data:</i> Partisanship: MediaBiasFactCheck. Network aggregates: Politifact and Buzzfeed datasets from FakeNewsNet. </p>
  <p> <i>Strengths:</i> partisanship as a predictor is seemingly obvious but perhaps overlooked; analysis here is clean and simple. Use of network aggregates contrasts <a href="https://dl.acm.org/doi/fullHtml/10.1145/3366423.3380180">A Kernel of Truth: Determining Rumor Veracity on Twitter by Diffusion Pattern Alone</a>. </p>
  <p> <i>Limitations:</i> highlights further research needed with seniors, but they explicitly state their data collected there is too small to be of use beyond qualitative suggestions. </p>
</Paper>


**Fake News Research: Theories, Detection Strategies, and Open Problems (KDD Tutorial)**

<a href="https://dl.acm.org/doi/pdf/10.1145/3292500.3332287" target="_blank">https://dl.acm.org/doi/pdf/10.1145/3292500.3332287</a>

Setting: This is the summary of a tutorial. Unfortunately I was unable to find any recording of the tutorial itself, but materials including slides are available at <a href="https://www.fake-news-tutorial.com/" target="_blank">https://www.fake-news-tutorial.com/</a>. The main sections of the tutorial are 1 - "fake news and related concepts," 2 - “fundamental theories,” 3 - “detection strategies,” and 4 - “open issues.”

Strengths: sections 1, 2, and 4 are nice overviews. There’s a lot of potentially interesting papers and algorithms presented in section 3.

Limitations: it’s disappointing that there doesn’t seem to be a recording. Section 3 in particular can be hard to follow from the slides alone; referring to the original papers will often be needed if seeking a thorough understanding.


**Understanding Information Operations using YouTubeTracker (ASONAM short)**

<a href="https://dl.acm.org/doi/pdf/10.1145/3341161.3343704" target="_blank">https://dl.acm.org/doi/pdf/10.1145/3341161.3343704</a>

Setting: suggests lack of in-depth tools for analyzing Youtube content, user behavior, and networks. Proposes tool to rectify that.

Limitations: seemingly no longer exists - no website at given link and cursory Google search did not find it either, though could be buried deeper.


**Semi-Supervised Learning and Graph Neural Networks for Fake News Detection (ASONAM short)**

<a href="https://dl.acm.org/doi/pdf/10.1145/3341161.3342958" target="_blank">https://dl.acm.org/doi/pdf/10.1145/3341161.3342958</a>

Setting: labels for fake news detection are often limited. This paper examines a semi-supervised approach to mitigate label shortages.

Main Contributions: Algorithm that builds a graph on content embeddings of articles, relating ones that are labeled with similar ones that are not.

Data: 150 labeled articles, 75 real 75 fake, from Horne, B. D., and Adali, S. (2017).

Strengths: using semi-supervised learning seems worthwhile to investigate in this context. Significant performance improvements with 5% or less labeled data.

Limitations: while experimental results suggest their algorithm is working, with 10% or more labeled data the performance benefit is minimal or none. They compare with one other method (Guacho et al. 2018) and two simpler baseline methods (SVM and random forest models on bag-of-words features), but those baselines outperform Guacho et al. in every test, suggesting Guacho et al. may not be appropriate for this setting or data and therefore the comparison is not strong. Their embedding and graph construction methods (GloVe and k-nn) are not the most sophisticated ones out there. 


**5 sources of clickbaits you should know! using synthetic clickbaits to improve prediction and distinguish between bot-generated and human-written headlines (ASONAM long)**

<a href="https://dl.acm.org/doi/abs/10.1145/3341161.3342875" target="_blank">https://dl.acm.org/doi/abs/10.1145/3341161.3342875</a>

Setting: clickbait headline data is limited. This paper proposes to generate more data using crowd-sourcing and VAE (separately).

Main Contributions: algorithms and analysis of several related questions: performance of detection algorithms augmented by synthetic data, differences between synthetic and real headlines, and detecting synthetic vs. real ones.

Data: real click bait data from mainstream news and social media, from Rony et al. 2017. Crowdsourced data from Amazon Mechanical Turk and journalism students. 

Strengths: synthetic data improves performance of a variety of detection algorithms. It is nonetheless somewhat possible to detect the synthetic ones.

Limitations: VAE and infoVAE only generation algorithms tested. Insufficient how well humans can detect real vs. synthetic (relevant for determining how much room remains for improvement).


**A Postmortem of Suspended Twitter Accounts in the 2016 U.S. Presidential Election (ASONAM long)**

<a href="https://dl.acm.org/doi/pdf/10.1145/3341161.3342878" target="_blank">https://dl.acm.org/doi/pdf/10.1145/3341161.3342878</a>

Setting: exploratory/descriptive analysis of suspended accounts and new Twitter countermeasures, particularly related to 2016 US election.

Main Contributions: identifies several network-related factors that show differences between suspended and non-suspended communities. Compares suspended users over time and notes many more recent suspended users are related to old suspended users.

Data: roughly 90 million tweets from 9.5mil users collected over 4 months, of which 9.2mil tweets are from 900k suspended users.

Strengths: this avoids the sparsity issue due to Twitter streaming API maxing out at 1% of tweets, sometimes problematic (see "On Twitter Purge: A Retrospective Analysis of Suspended Users," Chowdhury et al. 2020), by focusing on a particular topic. The analysis is fairly in depth compared to some descriptive papers.

Limitations: focus on one topic makes it more difficult to use results on future topics.


**News Credibility Scroing [sic]: Suggestion of research methodology to determine**

**the reliability of news distributed in SNS (ASONAM short)**

<a href="https://dl.acm.org/doi/pdf/10.1145/3341161.3343683" target="_blank">https://dl.acm.org/doi/pdf/10.1145/3341161.3343683</a>

Setting: proposes system for evaluating credibility in social media, with particular focus on Facebook documents.

Main Contributions: suggests importance of considering user roles: creator, distributor, or follower. Aims to give a single fairly understandable score representing the probability a document is credible.

Data: Facebook, with Amazon Mechanical Turk for labels (credible/not credible). Data does not appear to be collected yet.

Strengths: some detailed thoughts on evaluating credibility.

Limitations: at the time this paper was written, this was a proposed method, not a finished or even prototyped one. Logistic regression seems a difficult choice to use in this setting, given hefty dependence on feature engineering and the complexity of the problem.


**MediaRank: Computational Ranking of Online News Sources (KDD)**

<a href="https://dl.acm.org/doi/pdf/10.1145/3292500.3330709" target="_blank">https://dl.acm.org/doi/pdf/10.1145/3292500.3330709</a>

Setting: automatic ranking of news domains according to "peer reputation, reporting bias/breadth, bottomline financial pressure, and popularity."

Main Contributions: system to do above in a scalable and automated way, including website/API.

Data: parses discovered webpages and URLs from tweets to identify news sites. Then analyzes their characteristics to compute ranking. Uses various other data sources for evaluation, such as AllSides, MediaBiasFactCheck, DBpedia, Botometer, etc.

Strengths: large scale: 50k+ websites ranked, collects "about one million raw HTMLs and two million news related tweets each day." 

Limitations: I have concerns about what these rankings represent and how useful they are. Case study 1: breitbart.com - one of the suggested examples on their website’s home page - is ranked 97/50695. This news source is well known for its strong to extreme conservative bias (<a href="https://mediabiasfactcheck.com/breitbart/" target="_blank">https://mediabiasfactcheck.com/breitbart/</a>, <a href="https://www.politifact.com/personalities/breitbart/" target="_blank">https://www.politifact.com/personalities/breitbart/</a>,

<a href="https://www.statista.com/statistics/649146/breitbart-credibility-usa/" target="_blank">https://www.statista.com/statistics/649146/breitbart-credibility-usa/</a>, etc.). The ranking puts it ahead of Encyclopedia Britannica (116), the Associated Press (125), Harvard and MIT (122 and 168), TED (170), etc. This is possibly due to the fact that its ranking for the political bias of Breitbart appears to be missing (marked "not found" which hopefully means that there is an error, not that it is unbiased). This is incidentally not an error unique to Breitbart - for instance, the BBC also has political bias ranking “not found.”

Case study 2: there are many websites/entities on the list that do not appear to represent news, such as Target (rank 180), Ikea (rank 185), and the Italian homepage of Amazon (amazon.it, rank 111).

Although this evidence is qualitative rather than quantitative, it is not clear to me exactly what the rankings represent, and therefore how useful they would be in downstream applications.

Also, the API link appears to redirect to a comparison with other similar sites, and contains no information about using the API.


**SAME: Sentiment-Aware Multi-Modal Embedding for Detecting Fake News (ASONAM long)**

<a href="https://dl.acm.org/doi/pdf/10.1145/3341161.3342894" target="_blank">https://dl.acm.org/doi/pdf/10.1145/3341161.3342894</a>

Setting: multi-modal (i.e. using different types of data) strategy for detecting fake news, with particular focus on examining comment sentiment as a feature.

Main Contributions: algorithm that can do above, shows user sentiment is relevant, and outperforms 5 "state-of-the-art baselines."

Data: PolitiFact and GossipCop from FakeNewsNet.

Strengths: good ideas for combining different data modes, which are validated by their ablation study. Their method universally outperforms the 5 methods they compared with.

Limitations: uses images (with the article itself), content, sentiment, similarity but not user networks, syntax, or website structure. In other words, some modes that are shown relevant in other works are missing here. Individual mode methods such as VGGNet and GloVe are old and there may be better ones.


**Dormant Bots in Social Media: Twitter and the 2018 U.S. Senate Election (ASONAM short)**

<a href="https://dl.acm.org/doi/pdf/10.1145/3341161.3343852" target="_blank">https://dl.acm.org/doi/pdf/10.1145/3341161.3343852</a>

Setting: identification of "dormant bots," which are social media accounts which have not posted content but have “large follower and friend relationships with other users.” These could influence rankings or be used to post maliciously in the future.

Main Contributions: highlights the problem and provides methods to detect dormant bots. Applied them in real-world case with very significant results.

Data: follower networks of 21 Democrat and 4 Republican incumbent senators in 2018 election. In total about 6mil followers. Data collected from Twitter REST API including names, followers, friends, posts, account creation dates, and (optionally user-defined) location. 

Strengths: problem makes sense. Real-world application had extremely strong effects, leading to Twitter suspending 70 million users after FBI court order, and subsequently revising their API.

Limitations: single case study. Evaluating effects and intentions of these bots is difficult, given they have no behavior, though this is not a limitation of the paper so much as the setting.


**Multitask Learning for Blackmarket Tweet Detection (ASONAM short)**

<a href="https://dl.acm.org/doi/pdf/10.1145/3341161.3342934" target="_blank">https://dl.acm.org/doi/pdf/10.1145/3341161.3342934</a>

Setting: detect usage of blackmarket services to promote tweets, e.g. requesting blackmarket participants to retweet.

Main Contributions: algorithm to classify if blackmarket or not and estimate number of likes and retweets after 5 days from post. Combines structural features like number of hashtags, mentions, URLs, nouns, adjectives, etc. with content representation. Cross stitch to put these two feature sets together.

Data: scraped about 1800 tweets from blackmarket websites and combined with 2000 tweets from the same authors that weren’t on the blackmarket. Topic annotations by hand on test set: promotional, entertainment, spam, news, politics, others.

Strengths: new (and worthwhile) area of investigation. Experimental results look promising.

Limitations: potential label validity concerns: since "non-blackmarket" tweets are collected from the same users as blackmarket ones, they might be posting them to other blackmarkets that weren’t scraped. Further, the real-world task would generally be identifying blackmarket tweets from random users, not identifying blackmarket tweets from users who definitely use the blackmarket.


**Monitoring Individuals in Drug Trafficking Organizations: A Social Network Analysis (ASONAM short) ***and* **On Augmented Identifying Codes for Monitoring Drug Trafficking Organizations (ASONAM short)**

<a href="https://dl.acm.org/doi/pdf/10.1145/3341161.3342938" target="_blank">https://dl.acm.org/doi/pdf/10.1145/3341161.3342938</a>

<a href="https://dl.acm.org/doi/pdf/10.1145/3341161.3343530" target="_blank">https://dl.acm.org/doi/pdf/10.1145/3341161.3343530</a>

Setting: two closely-related papers by same authors. Examines which individuals to surveil in networks related to drug trafficking, under the assumption that one can extract all relevant information about any person in the graph from their neighbor as well as themselves.

Main Contributions: theory and algorithms to allocate surveillance efficiently, both from scratch (first paper) and if you already have some surveillance deployed and want to deploy more (second paper). 

Data: various datasets related to drug trafficking networks obtained from rea-lworld investigations: Operation Juanes, Operation Acero, Operation Mambo, Operation Jake, Heroin Dealing, Montreal Street Gangs, Cocaine Dealers, and DrugNet.

Strengths: theoretical results lead to algorithm that has certain optimality (given assumptions).

Limitations: the big assumption - that one can extract all information with only surveillance on neighboring person, and with equal cost compared to surveilling the person themselves - is unlikely to hold in the real world. Further, this assumes the whole network has equal costs and benefits of surveillance, which is likewise unlikely (someone who might be the kingpin of a cartel, for example, surely does not have the same costs and benefits as some random drug user).


**RumorSleuth: Joint Detection of Rumor Veracity and User Stance (ASONAM long)**

<a href="https://dl.acm.org/doi/pdf/10.1145/3341161.3342916" target="_blank">https://dl.acm.org/doi/pdf/10.1145/3341161.3342916</a>

Setting: detection of rumer veracity and spreaders’ stance towards it.

Main Contributions: algorithm to do these two tasks jointly, using content and user information.

Data: PHEME, Twitter 15 and Twitter16.

Strengths: good experimental results. Joint learning is better than doing each task separately.

Limitations: uses user features but not network ones. May be superseded by VRoC (<a href="https://dl.acm.org/doi/fullHtml/10.1145/3366423.3380054" target="_blank">https://dl.acm.org/doi/fullHtml/10.1145/3366423.3380054</a>), which does rumor detection and tracking as well, although performance on PHEME veracity classification looks slightly better here, while worse on stance classification.


**Rumor Detection in Social Networks via Deep Contextual Modeling (ASONAM long)**

<a href="https://dl.acm.org/doi/pdf/10.1145/3341161.3342896" target="_blank">https://dl.acm.org/doi/pdf/10.1145/3341161.3342896</a>

Setting: rumor detection including veracity, i.e. detection of "without rumor," “true rumor,” “false rumor,” or “unrecognizable.”

Main Contributions: algorithm which leverages tweet content in semantic context of an original tweet and all the replies. It does this by embedding tweets individually, then combining all the tweets together with self-attention, along with a latent label loss that pushes the label distributions of replies and the main tweet to be similar.

Data: Twitter 15 and Twitter 16

Strengths: although there are plenty of papers using network-based features, this is the first I’ve seen that uses how the content relates to the network in this way. Experimental results are good. Includes experimental analysis of different embedding methods (often missing in other papers) and all the pieces of the algorithm.

Limitations: some other types of information (diffusion, domain/article features, etc.) are not used. They note GloVe’s optimal performance, among embedding methods, may be because data has similarities to Wikipedia, the corpus on which GloVe is trained, so more varied data would be helpful.


**Detection of Topical Influence in Social Networks via Granger-Causal Inference: A Twitter Case Study (ASONAM long)**

<a href="https://dl.acm.org/doi/pdf/10.1145/3341161.3345024" target="_blank">https://dl.acm.org/doi/pdf/10.1145/3341161.3345024</a>

Setting: investigates information spread and attitude changes. For example, we can observe someone retweeting a piece of information, but is it because they were influenced by it, or just a passive forwarding?

Main Contributions: analysis/modeling from the point of view of Granger causality.

Data: Twitter API; data from about 360k users over a period of two months.

Strengths: setting is worth further thought. Detailed analysis. Honest about limitations.

Limitations: "While our analysis of a social media dataset finds effects that are consistent with our model of social influence, evidence suggests that these effects can be attributed largely to external confounders."

Not very useful for our current research; skimmed only.

**dEFEND: Explainable Fake News Detection (KDD)**

<a href="https://dl.acm.org/doi/pdf/10.1145/3292500.3330935" target="_blank">https://dl.acm.org/doi/pdf/10.1145/3292500.3330935</a>

Setting: detect fake news articles in an explainable way.

Main Contributions: algorithm combining article and comment content, through attention mechanism that also gives explainability.

Data: FakeNewsNet for veracity experiments. ClaimBuster and Mechanical Turk for evaluating explainability.

Strengths: network design seems effective and experimental results are good. Explainability may be very useful, particularly if fake news needs to be confirmed by human moderator.

Limitations: explainability evaluation limited a bit by lack of good baselines for comparison (new research area).


**Ranking in Genealogy: Search Results Fusion at Ancestry**

<a href="https://dl.acm.org/doi/pdf/10.1145/3292500.3330772" target="_blank">https://dl.acm.org/doi/pdf/10.1145/3292500.3330772</a>

Not relevant to our current research; not read.