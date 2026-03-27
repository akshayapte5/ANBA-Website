# How to Manage the Static Blog CMS

Since this website is brilliantly architected to run purely on static hosting (like GitHub Pages) without any Python, Node, or Database backend whatsoever, we built a **Parameterized Javascript Generator** to natively handle your blog!

You **DO NOT** need to duplicate HTML templates to write a new article. Here is exactly how to do it:

### Step 1: Open the Articles Configuration
Navigate to the `content/` folder and open **`articles.js`** in any text editor.

### Step 2: Add Your Content Block
At the bottom of the `ArticlesContent` array, you will see pairs of curly braces `{ ... }` representing individual articles. 
To add a new article, simply copy an existing block, add a comma `,`, and paste it!

Update the following keys:
1. **`id`**: MUST be a unique number (e.g., if the last post was `id: 3`, make the new one `id: 4`). The system uses this exact number to generate the `post.html?id=4` URL instantly.
2. **`title`**: The main title of your blog.
3. **`date`**: The visual publish date.
4. **`image`**: The thumbnail image path for the grid (e.g., `"images/new.jpg"`).
5. **`summary`**: The short blurb displayed on the cards.
6. **`heroImage`**: The massive wide aspect-ratio image displayed at the tip-top of the actual blog post.

### Step 3: Write Your Paragraphs
Under the metadata, you will see simple string variables:
`paragraph1:`
`heading1:`
`paragraph2:`
`quote:`
`paragraph3:`

Simply put your text between the quotation marks! The Javascript `content-loader.js` engine reads these exact tags and injects them flawlessly into the HTML DOM structure, keeping everything styled perfectly without you ever needing to write a single `<div>` or `<p>` tag natively.

### Step 4: Save & Deploy
Because the `article.html` page (which lists the cards) and the `post.html` page (which reads the text) are both mapped to read `ArticlesContent` dynamically, your new blog post is **immediately live**! 

Open `http://localhost:8080/article.html`, refresh your browser, and click your new card. You'll instantly see your new content mapped to the post page! When you are ready for the world to see it, simply commit the single `articles.js` file override to your repository and GitHub Pages will update your live blog network entirely.
