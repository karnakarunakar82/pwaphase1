## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/karnakarunakar82/pwaphase1/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/karnakarunakar82/pwaphase1/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact


## Downloading and Extracting  the Project
- Download the project rubric structure [udacity-Feedreader](https://github.com/udacity/frontend-nanodegree-feedreader)
- After downloading the project, extract the zip file
- Open `index.html` file in favorite browser, Open `feedreader.js` file to open the RSS reader, After reading i understood that how to write test suite and test cases.
- To create test suite and test cases I have follow the below functions
    * describe()
        - A test suite
        - It consist of 2 parameters
            * Title of the test suite
            *  Function that implements the test suite.
    * it()
        - test spec represents a test case inside the test suite
    * expect()
        - expectation represents an assertion that can be either true or false.
- To see tests output
    * Open `index.html`, at the bottom of screen jasmine panel consisting with number of specs and failures
- To see tests
    * Open `feedreader.js`, all suites are places inside this file
## Test Suites :
- RSS Feeds:
    * test if allFeeds variable has been defined and that it is not empty.
    * test if every feed's url is defined and that the URL is not empty.
    * test if every feed's name is defined and that the name is  not empty.

- The menu:
    * test if the menu element is hidden by default
    * test if the menu changes visibility when the menu icon is clicked.
    * It has two expectations
        - Display, when clicked
        - Hide, when clicked again

- Initial Entries:
    * use the jasmine  beforeEach and asynchronous done() function to test the Suit.
    * test if there is at least a single .entry element within the .feed container.
- New Feed Selection:
    * test if feed content changes when new feed is selected






















Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
