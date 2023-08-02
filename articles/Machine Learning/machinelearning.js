// Create the section element for Blog
const blogSection = document.createElement('section');
blogSection.setAttribute('class', 'bg-gray-100 dark:bg-gray-900');
blogSection.setAttribute('id', 'Blog');

// Create the h3 element for the blog heading
const blogHeading = document.createElement('h3');
blogHeading.setAttribute('class', 'blog-head text-5xl text-white font-bold text-center');

// Create the span elements for the desktop and mobile text
const desktopTextSpan = document.createElement('span');
desktopTextSpan.setAttribute('class', 'desktop-text');
desktopTextSpan.textContent = "Machine Learning Blog Post";

const mobileTextSpan = document.createElement('span');
mobileTextSpan.setAttribute('class', 'mobile-text');
mobileTextSpan.textContent = "ML Blog post";

// Append the spans to the h3 element
blogHeading.appendChild(desktopTextSpan);
blogHeading.appendChild(mobileTextSpan);

// Create the div element for container-blog
const containerBlogDiv = document.createElement('div');
containerBlogDiv.setAttribute('class', 'container-blog mx-auto py-8 lg:pl-28 lg:pr-28');

// Create the div element for grid layout
const gridDiv = document.createElement('div');
gridDiv.setAttribute('class', 'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3');

// Blog Post 1
const blogPost1Div = document.createElement('div');
blogPost1Div.innerHTML = `
    <!-- Rest of the HTML code for Blog Post 1 -->
    <div class="relative">
    <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
        src="https://www.totalphase.com/media/blog/2022/11/960x0.jpg" alt="">
    <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
        <img class="object-cover object-center w-10 h-10 rounded-full"
            src="../../assests/images/avatarman.png" alt="">
        <div class="mx-4">
            <h1 class="text-sm text-gray-700 dark:text-gray-200">Siva Teja Cherukupalli
            </h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">Artificial Intelligence</p>
        </div>
    </div>
</div>
<h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">"Prompts" in AI is
    challenging
    task in Future.?</h1>
<p class="text-sm text-gray-500 dark:text-gray-400 pt-4">
    In the context of AI, a "Prompt" is a piece
    of text or instruction provided to an AI model to guide its
</p>
<div class="text-center">
    <button type="button"
        class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"><a
            href="./PromptsinAIischallengingtaskinFuture.html">
            Explore this blog</a></button>
</div>
</div>
`;

// Blog Post 2
const blogPost2Div = document.createElement('div');
blogPost2Div.innerHTML = `
    <!-- Rest of the HTML code for Blog Post 2 -->
    <div class="relative">
    <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
        src="https://codein-blogs.anshulsoni3.repl.co/assets/images/blog-6.jpg" alt="">
    <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
        <img class="object-cover object-center w-10 h-10 rounded-full"
            src="../../assests/images/avatarwoman.png" alt="">
        <div class="mx-4">
            <h1 class="text-sm text-gray-700 dark:text-gray-200">Juhi Nagpure</h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">Artificial Intelligence</p>
        </div>
    </div>
</div>
<h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">Is ChatGPT Going to Replace
    Programmers?</h1>
<p class="text-sm text-gray-500 dark:text-gray-400 pt-10">
    There are four major development approaches
    It is unlikely that ChatGPT or any other language model will
</p>
<div class="text-center">
    <button type="button"
        class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"><a
            href="./is-chatgpt-going-to-replace-programmers.html">
            Explore this blog</a></button>
</div>
</div>
`;

// Blog Post 3
const blogPost3Div = document.createElement('div');
blogPost3Div.innerHTML = `
    <!-- Rest of the HTML code for Blog Post 3 -->
    <div class="relative">
    <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
        src="../../assests/images/blog-4.png" alt="">
    <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
        <img class="object-cover object-center w-10 h-10 rounded-full"
            src="../../assests/images/avatar.jpg" alt="">
        <div class="mx-4">
            <h1 class="text-sm text-gray-700 dark:text-gray-200">Juhi Nagpure</h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">Machine Learning</p>
        </div>
    </div>
</div>
<h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">What is machine learning?</h1>
<p class="text-sm text-gray-500 dark:text-gray-400 pt-10">
    Machine learning
    is an application of AI that enables systems to learn and improve from experience without
</p>
<div class="text-center">
    <button type="button"
        class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"><a
            href="./is-chatgpt-going-to-replace-programmers.html">
            Explore this blog</a></button>
</div>
</div>

`;

// Blog Post 4
const blogPost4Div = document.createElement('div');
blogPost4Div.innerHTML = `
    <!-- Rest of the HTML code for Blog Post 4 -->
    <div class="relative">
                        <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                            src="https://images.ctfassets.net/3viuren4us1n/2CsVyr5yjxEiSsNVcMmB7E/23685da16eefe83f355e43ccef90f3fd/How-do-you-train-AI.jpg?fm=webp&w=1920"
                            alt="">
                        <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                            <img class="object-cover object-center w-10 h-10 rounded-full"
                                src="../../assests/images/avatar.jpg" alt="">
                            <div class="mx-4">
                                <h1 class="text-sm text-gray-700 dark:text-gray-200">Prasad D Wilagama</h1>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Machine Learning</p>
                            </div>
                        </div>
                    </div>
                    <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">What’s Machine Learning Done in
                        the Last 20 Years?</h1>
                    <p class="text-sm text-gray-500 dark:text-gray-400 pt-4">
                        In the past 20 years, machine learning has made significant progress and has been applied to a
                        wide range of applications.
                    </p>
                    <div class="text-center">
                        <button type="button"
                            class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"><a
                                href="./What-Machine-Learning-Done-in-the-Last-20-Year.html">
                                Explore this blog</a></button>
                    </div>
                </div>
    
`;
const blogPost5Div = document.createElement('div');
blogPost5Div.innerHTML = `
    <!-- Rest of the HTML code for Blog Post 5 -->
    <div class="relative">
    <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
        src="https://www.mooc.org/hubfs/learn-mobile-app-development-jpg.jpeg" alt="">
    <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
        <img class="object-cover object-center w-10 h-10 rounded-full"
            src="../../assests/images/avatar.jpg" alt="">
        <div class="mx-4">
            <h1 class="text-sm text-gray-700 dark:text-gray-200">Ameet Talwalkar</h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">Machine Learning</p>
        </div>
    </div>
</div>
<h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">Tackling Diverse Tasks with
    Neural
    Architecture Search</h1>
<p class="text-sm text-gray-500 dark:text-gray-400 pt-10">
    The past decade has witnessed the success of
    machine learning (ML) in solving diverse real-world problems
</p>
<div class="text-center">
    <button type="button"
        class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"><a
            href="./Tackling DiverseTaskswithNeuralArchitectureSearch.html">
            Explore this blog</a></button>
</div>
</div>

    
`;

// Append blog posts to the grid div
gridDiv.appendChild(blogPost1Div);
gridDiv.appendChild(blogPost2Div);
gridDiv.appendChild(blogPost3Div);
gridDiv.appendChild(blogPost4Div);
gridDiv.appendChild(blogPost5Div);

// Append grid div to container-blog div
containerBlogDiv.appendChild(gridDiv);

// Append heading and container-blog div to the Blog section
blogSection.appendChild(blogHeading);
blogSection.appendChild(containerBlogDiv);

// Append the Blog section to the body
document.body.appendChild(blogSection);
