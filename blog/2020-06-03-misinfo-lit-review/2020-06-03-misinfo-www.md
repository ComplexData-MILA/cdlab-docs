---
title: "Web Conference 2020 Misinformation Papers"
slug: misinfo/part2
authors: 
    - kellin
tags:
  - misinformation
  - web conference
  - www
  - literature review
  - fake news
---

This post is part of a literature review on misinformation, especially
in relation to technology and social media. The intention is to organize
my thoughts and to provide the reader with condensed information beyond
what can be found in the abstract.

<!--truncate-->

For each paper I give the setting, main contributions, data used, and
some strengths and limitations. These opinions are my own and are
presented to give the reader some ideas. They do not represent an
ironclad critical review; your judgment may vary, and so might mine on
subsequent readings.

The following are from [searching](https://dl.acm.org/action/doSearch?AllField=misinformation&expand=all&ConceptID=119387&AfterYear=2020&BeforeYear=2020&queryID=26/794627630) for the keyword **“misinformation,”** among **2020 WWW** (and companion) papers. **23 results total.** Results are ordered here according to the search
results order.

## [Misinformation Battle Revisited: Counter Strategies from Clinics to Artificial Intelligence](https://dl.acm.org/doi/fullHtml/10.1145/3366424.3384373)

_Setting:_ high level survey of methods to
counter misinformation, including education, legislation, fact-checking,
rumour clinics, public inoculation, filtering, downgrading, and more.

_Main Contributions:_ limited as it’s more
a survey paper. Suggests more co-regulation (organization
self-regulation + higher level government regulation) is needed to win
the battle.

_Data:_ none.

_Strengths:_ general ideas and broad
perspective, including history and many strategies outside ML.

_Limitations:_ don’t expect concrete
algorithms or similar. Co-regulation advocacy is not very in-depth,
either in recommendations or supporting analysis.

## [Mitigating Misinformation in Online Social Network with Top-k Debunkers and Evolving User Opinions](https://dl.acm.org/doi/fullHtml/10.1145/3366424.3383297)

_Setting:_ counter misinformation by
inducing some users (“debunkers”) to spread counter message. In contrast
to previous work, here examines setting when user beliefs (in true or
fake info) can vary, instead of being static once formed.

_Main Contributions:_ algorithm to select
best debunkers in above setting.

_Data:_ “Facebook” and “Twitter” (exact
sourcing unclear).

_Strengths:_ more realistic than static
opinions. Real-world experimental results detecting what opinions will
be formed in a network, on a given topic, look promising.

_Limitations:_ debunker compliance unclear
in the real world. Real-world experiments are prediction only, no
interventions tested. Misinformation topics must be specified by user.

## [Proactive Discovery of Fake News Domains from Real-Time Social Media Feeds](https://dl.acm.org/doi/fullHtml/10.1145/3366424.3385772)

_Setting:_ detect fake news websites. Input
keyword(s) for topic -\> extract websites on that topic from tweets
using network connections -\> classify fake/real using topic-agnostic
classifier on the webpage structure.

_Main Contributions:_ shows that above
content-less approach is effective and provides algorithm to do it.

_Data:_ tweets on Donald Trump impeachment,
website HTML from tweet URLs, MediaBiasFactCheck.

_Strengths:_ results look promising and
system is close to real-world applicability (pipeline including
dashboard, API in the works).

_Limitations:_ requires keyword input.
Experiments limited because only one topic tested.

## [Factoring Fact-Checks: Structured Information Extraction from Fact-Checking Articles](https://dl.acm.org/doi/fullHtml/10.1145/3366423.3380231)

_Setting:_ fact-checks lack
standardization; compliance with an existing standard is low and takes
substantial effort.

_Main Contributions:_ NLP algorithm for
extracting structured information from unstructured fact-check articles.

_Data:_ fact-checks linked from
DataCommons.

Not that useful at current stage of project. Skimmed only.

## [A Kernel of Truth: Determining Rumor Veracity on Twitter by Diffusion Pattern Alone](https://dl.acm.org/doi/fullHtml/10.1145/3366423.3380180)

_Setting:_ determine if rumor is true or
false based only on how it spreads (no content, no user metadata, etc.).

_Main Contributions:_ Shows diffusion is
predictive and gives an algorithm: Weisfeiler-Lehman graph kernel to
embed cascades, and then a binary classifier on the embeddings.

_Data:_ extremely extensive twitter + fact-check data from _[The spread of true and false news online](https://science.sciencemag.org/content/359/6380/1146).
Note however the relatively easily obtainable version contains diffusion
and veracity information only, no content (and is still not that easy to
obtain). Anything further would require an agreement with Twitter.

_Strengths:_ Strong results that diffusion
patterns are predictive. Potentially easy extension out of
diffusion-only setting (node tags with WL).

_Limitations:_ Supervised. As authors note,
paper shows importance of diffusion, rather than a solution to
real-world problems, which should use more than diffusion alone.

## [Unveiling Coordinated Groups Behind White Helmets Disinformation](https://dl.acm.org/doi/fullHtml/10.1145/3366424.3385775)

_Setting:_ case study investigating
disinformation about White Helmets (Syrian civil war). Applies two
approaches to detect coordinated groups: rapid retweets and tweet
similarity.

_Main Contributions:_ analysis is fairly
exploratory, but identifies some coordinated groups of 4 types: multiple
accounts sharing same content, few accounts with similar tweets, factory
of news websites, and accounts using automation.

_Data:_ DARPA SocialSim

_Strengths:_ focused case analysis of
real-world misinformation.

_Limitations:_ analysis is not very
sophisticated or conclusive.

## [Facebook Ads Monitor: An Independent Auditing System for Political Ads on Facebook](https://dl.acm.org/doi/fullHtml/10.1145/3366423.3380109)

_Setting:_ detect which ads are political
using CNN and word embeddings. Real-world application on 2018 Brazilian
election.

_Main Contributions:_ Algorithm to
accomplish above. Results suggest Facebook’s political ad identification
system is deficient.

_Data:_ Facebook ads, both from Facebook Ad
Library and from their own collecting.

_Strengths:_ Important conclusion. Some
successful deployment: created browser extension to collect and classify
ads, presented to Brazilian senate…

_Limitations:_ Brazilian election only.
Potentially vulnerable to adversarial evasion.

## [VRoC: Variational Autoencoder-aided Multi-task Rumor Classifier Based on Text](https://dl.acm.org/doi/fullHtml/10.1145/3366423.3380054)

_Setting:_ rumor classification problem
defined as detection, tracking, stance classification, and veracity
classification.

_Main Contributions:_ algorithm to do all
the above jointly: VAE codes tweet text and the code is used in 4 BiLSTM
classifiers (one per sub-problem), with a “co-train engine” that
combines losses for joint training.

_Data:_ combination of PHEME5, PHEME9, and
RumourEval (tweets related to news with rumor, veracity, and stance
labels).

_Strengths:_ only “one” (combined) dataset
tested, but results are strong and compare favorably to many other
methods. Does all 4 tasks together while most methods only do 1.

_Limitations:_ content only, no network.
Tracker principle - classify into given groups, rather than
related/not-related - could be limiting. Supervised, which is
particularly problematic for tracking and veracity classification,
though not fatal.

## [FakeFinder: Twitter Fake News Detection on Mobile](https://dl.acm.org/doi/fullHtml/10.1145/3366424.3382706)

_Setting:_ Short paper on mobile app for
detecting fake news. Particularly about speed, but also brief discussion
of interface and related.

_Main Contributions:_ small model (ALBERT)
running locally achieves better speed and comparable performance to
large model (BERT) on cloud.

_Data:_ tweets and comments (collection not
detailed but not really important).

_Strengths:_ indeed it does achieve better
speed.

_Limitations:_ I’m not sure about their
premise. “We designed and developed a mobile app for real-time fake news
detection from live Twitter streams, which is an effective approach to
contain spread of fake news on Twitter.” This requires people to install
the app, but will they be the people that are susceptible to fake news?
Also, there is extreme overhead if multiple users checking veracity of
the same thing - how would cloud compare if you can calculate results
once and store them?

## [Social Media Dark Side Content Detection using Transfer Learning Emphasis on Hate and Conflict](https://dl.acm.org/doi/fullHtml/10.1145/3366424.3382084)

_Setting:_ identify malicious social media
content in cases where data is limited, especially different languages.
Broadly includes misinformation but never explicitly focused on it.
Application to Amharic language.

_Main Contributions:_ transfer learning NLP
method to handle this tricky and less-studied situation.

_Data:_ their own Facebook crawling +
AmharicCorpus (public web crawling data in Amharic).

_Strengths:_ seems to work, though a bit
unclear on how the datasets are constructed. Broad applicability.

_Limitations:_ no network or comparison
with network-based or other structural methods, which could also work on
different languages.

## [On Twitter Purge: A Retrospective Analysis of Suspended Users](https://dl.acm.org/doi/fullHtml/10.1145/3366424.3383298)

_Setting:_ descriptive analysis of purged
twitter users.

_Main Contributions:_ data collection
method: collect tweets over a period of time and then identifying which
ones were purged at the end of the period (because one cannot collect
purged user tweets retroactively). Some insights on this data.

_Strengths:_ data collection method enables
insights on a group we don’t know much about.

_Limitations:_ insights can be fairly
surface level. Authors suggest sparsity of the data is an issue (could
not collect entire tweet history of purged users, only some).

## [Characterizing Search-Engine Traffic to Internet Research Agency Web Properties](https://dl.acm.org/doi/fullHtml/10.1145/3366423.3380290)

_Setting:_ analysis of IRA actions using a
combination of social media (Facebook, Twitter), search (Bing), and
browser (Internet Explorer 11) data.

_Main Contributions:_ use of the latter
two. Highlights how a substantial chunk of IRA actions were apolitical
and not misinformation, which contributed substantially to their
engagement.

Search setting is different from the data we are currently working with,
so directly relevant insights are limited.

## [Towards Detection of Subjective Bias using Contextualized Word Embeddings](https://dl.acm.org/doi/fullHtml/10.1145/3366424.3382704)

_Setting:_ detect content bias on the
sentence level using BERT variants and Wikipedia edit data.

_Main Contributions:_ Sentence level is
more interesting than word level like some previous work, though they
state they want to extend to document level in the future.

_Data:_ WNC dataset (\~400k Wikipedia
sentences, before and after being de-biased)

_Strengths:_ outperforms baselines.

_Limitations:_ it’s fine for its length,
but that length is very short, so don’t expect a whole lot.

## [The Chameleon Attack: Manipulating Content Display in Online Social Media](https://dl.acm.org/doi/fullHtml/10.1145/3366423.3380165)

_Setting:_ examines attack by editing
content, e.g. making a non-controversial post, getting people to
interact in some way with it (e.g. “like”), and then changing the post
to something completely different. Possible, for example, with a
redirect link: changing the redirect changes the link preview on the
social media site.

_Main Contributions:_ the problem itself,
and ways to mitigate it.

_Data:_ tests the attack in practice on
facebook football fan groups, using it to get a fan pages for rival
clubs into the groups.

_Strengths:_ convincing analysis that this
is something to be concerned about.

_Limitations:_ more real-world data would
be nice, e.g. on how prevalent this is, though of course collection is
difficult.

## [Seeding Network Influence in Biased Networks and the Benefits of Diversity](https://dl.acm.org/doi/fullHtml/10.1145/3366423.3380275)

_Setting:_ Seeding networks, i.e. choosing
nodes in the network to target to start cascades (for example for
advertising, public health, etc.), with the efficiency-maximizing goal
of reaching as much of the network as possible. Strategies designed
purely with efficiency maximization in mind can lead to very unequal
outcomes for different groups in the network. So this paper examines
seeding more diversely.

_Main Contribution:_ shows strongly
strongly that seeding for diversity need not sacrifice and can even
improve efficiency.

_Data:_ \~53k computer science co-authors
labeled with first-name-perceived gender.

_Strengths:_ gives practical insight on
societally important topic.

_Limitations:_ assumes optimization takes
place with aggregated metadata, e.g. we know how many connections a
person has but not who they are. However, if this assumption does not
hold and we know who the connections are, then rather than an
optimization based purely on degree, with or without diversity, one can
do a more effective optimization, e.g. greedy. And in this case their
proof no longer applies, the results become uncertain, and there may be
better diversity-preserving algorithms. Therefore, applicability of this
result depends on the situation, i.e. the data and computation
constraints.

## [Stop tracking me Bro\! Differential Tracking of User Demographics on Hyper-Partisan Websites](https://dl.acm.org/doi/fullHtml/10.1145/3366423.3380221)

_Setting:_ examines differences in tracking
using 9 constructed personas. Finds patterns using co-clustering of
personas and websites. Focus on comparing right vs. left websites.

_Main Contributions:_ the persona
methodology. Right-leaning websites track more, and some similar
demographic insights.

_Data:_ 556 websites crawled with each
persona, with political leaning labels.

_Strengths:_ persona idea is novel and
seems effective.

_Limitations:_ 9 personas may be a bit few.
Not sure if disabling all ad and similar blockers is representative user
behavior. Right vs. left analysis is interesting but not sure how
applicable it is. Analysis is descriptive only; more information on how
predictive this information is would be useful.

## [Identifying Referential Intention with Heterogeneous Contexts](https://dl.acm.org/doi/fullHtml/10.1145/3366423.3380175)

_Setting:_ identify the intention of a
content author towards a reference, between “strong accept,” “accept,”
“background,” and “strong reject.”

_Main Contributions:_ algorithm to do above
by combining the referring content, the content before and after the
referral, the referred content, and the network context. First embeds
each separately, applies separate attention, and then combines with
another global attention.

_Data:_ academic dataset of papers on two
topics with 1565 citations hand-labeled. News/social media dataset with
401 tweet references to 297 news articles.

_Strengths:_ sophisticated model, with
experimental results indicating the combination is effective.

_Limitations:_ supervised, and labeling
even by domain experts is “difficult and time-consuming.” If
cross-domain (e.g. different topic than training data) performance is
not good, this would be a substantial problem. Experiments are only
in-domain.

## [Conquering Cross-source Failure for News Credibility: Learning Generalizable Representations beyond Content Embedding](https://dl.acm.org/doi/fullHtml/10.1145/3366423.3380158)

_Setting:_ identify fake news through NLP
focused on syntactical content.

_Main Contributions:_ sophisticated
algorithm to do above.

_Data:_ 3 datasets with news articles and
veracity labels: Fake or Real News, Kaggle-JR, NELA-GT-2018.

_Strengths:_ good cross-source (i.e. train
on one news platform, test on another) results.

_Limitations:_ its strength can be a
weakness in that there’s a lot of information it doesn’t use, including
non-syntactical content, website structure, network, etc.

## [OpenCrowd: A Human-AI Collaborative Approach for Finding Social Influencers via Open-Ended Answers Aggregation](https://dl.acm.org/doi/fullHtml/10.1145/3366423.3380254)

_Setting:_ crowd-source detection of
influential/authoritative figures in social media, and learn how to use
the crowd data.

_Main Contributions:_ Bayesian model of the
problem and worker data and an EM algorithm to optimize it.

_Data:_ asked twitter users to name
influencers, collected potential ones, hand-labeled with expert
guidance, and combined with metadata from Twitter.

_Strengths:_ substantially reduces reliance
on experts and expert-labeled data (small number still needed). Good
performance.

_Limitations:_ needs crowd, and still some
experts. Network aggregate information only.