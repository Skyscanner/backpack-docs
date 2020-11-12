---
title: Updating this website
subtitle: Backpack belongs to everyone at Skyscanner. Changes are welcomed from anybody.
category: using
---

## Before you start

This guide explains how to change existing pages on this website. A guide to adding new pages is coming soon.

Rest assured that it's impossible for your changes to break this website. The design system team reviews all changes before publishing.

If you get stuck at any point, talk to the design system team on Slack in the #backpack channel.

### GitHub

Backpack uses a service called GitHub to manage content on this website.

To make changes to the website's content you'll need a GitHub account. If you don't already have one you can register for free on [GitHub's website](https://github.com).

### Markdown

Pages on this website are written using [Markdown](https://www.markdownguide.org/getting-started/), a markup language for writing documents. It's very simple and you don't need any knowledge of software engineering to use it.

## Steps

### 1. Go to the page

Go to the page you'd like to change. At the bottom of the page, look for a section called 'Improve this page'.

If the page doesn't have an 'Improve this page' section it can't be updated using these steps. To change it, talk to a member of the design system team.

> We're working on making more pages compatible with this process.

### 2. Edit the file

Follow the link to edit the page. This will take you to GitHub.

You might see a message on screen asking you to fork the repository. This is nothing to worry about. It just means you're making a copy of the website that you can edit. Press the 'Fork this repository' button to continue.

![GitHub's user interface displaying a button that says "fork this repo"](/../static/website-contribution-guide/fork-this-repo.png)

Next, you'll see the markdown file in a text editor. Make your changes.

Here's an example showing how to update the [Principles page](/using/principles).

![GitHub's user interface displaying a text editor"](/../static/website-contribution-guide/editor-view-before.png)

In this example, the uppercase 'C' on the word 'Component' has been changed to lower case.

![GitHub's user interface displaying a text editor with a change made to the original content"](/../static/website-contribution-guide/editor-view-after.png)

### 3. Propose your change

Once you're happy, find the section called 'Propose changes' at the bottom of the page.

Add a short description explaining the reason for your change in the first field. This information will be added to the file's changelog. Try to be as clear and concise as possible, to help future users understand the update.

If you need to provide more information about your change, you can add more detail in the larger field below.

![GitHub's user interface displaying a field for adding a commit message"](/../static/website-contribution-guide/commit-message.png)

### 4. Confirm your changes

You'll be shown a confirmation page where you can review the changes you've made.

If you spot a mistake, you can go back to the previous page and correct it.

If you are happy with your changes, select 'Create pull request'. You'll have one more chance to review your change on the next page before you submit it to the design system team to review.

![GitHub's user interface displaying the differences before and after a file was changed"](/../static/website-contribution-guide/compare-view.png)

### 5. Create a pull request

A pull request is a request to the design system team to add ('pull') your changes into the website.

Once you've created a pull request, your proposed change and any comments you've written will be publicly visible, meaning that anyone can see them on GitHub.

You'll see the description you entered in step 3 and can add some additional information if you want to.

Once you're happy, select 'Create pull request'.

### 6. Wait for the team to review your pull request

The design system team will be notified of your suggestion and will review it soon, usually within a day.

The team will either:

* accept your proposal and publish your change straight away
* accept your proposal but ask for some changes before publishing
* not accept your proposal and explain why
