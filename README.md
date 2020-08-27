# tagcloud
basic tag cloud with weight-reduction functionality when tags are clicked (tags of weight 0 don't display)

Interview task I was asked to complete in 2015. 

Live demo: https://jsfiddle.net/yochannah/cmL6gw5j/ 

I intentionally haven't included a licence - I like to share this as an example of the type of simple task that is good for coder interviews, but the task itself was written by someone else so I can't give permission to re-use it. 

## Original brief (sans the .csv file:)


> I hate to ask for any more of your time, but, to be fair to the other candidates, I would like you to consider completing the following very short project. This is a way for us to mutually confirm in a hands-on manner that the sort of skills we will be requiring on a day-to-day basis match your profile. I would genuinely expect no more than 1 hour of your time on this, so feel free to only complete part of it, and/or to use any open-source tools you see fit (as long as you tell us which ones you used). 

> I attach a file called “test.csv” that has a list of words and associated weights. I would like you to produce a small demo that runs on a browser, plots a word cloud of these twenty words, with the respective sizes controlled by the “weights” vector, and allows the following two interactions:

> 1. when a user left-clicks on a word, its weight is increased by 0.1 units (and its size should adapt to the new weight) - a right-click decreases it.
> 2. if the weight drops below 0, the word is entirely deleted.

> Please also include a simple table of all the words and up-to-date weights (0 for deleted words) below the word cloud.

> Please let me know whether you might be able to have the time to put this together before our meeting on Friday? 
