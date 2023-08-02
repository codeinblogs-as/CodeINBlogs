// Create the section element for Blog
const blogSection = document.createElement('section');
blogSection.setAttribute('class', 'bg-gray-100 dark:bg-gray-900');
blogSection.setAttribute('id', 'Blog');

// Create the h1 element for the blog heading
const blogHeading = document.createElement('h1');
blogHeading.setAttribute('class', 'blog-head text-5xl text-white font-bold text-center');
blogHeading.textContent = "Android & IOS Blog Post";

// Create the div element for container-blog
const containerBlogDiv = document.createElement('div');
containerBlogDiv.setAttribute('class', 'container-blog mx-auto py-8 lg:pl-28 lg:pr-28');

// Create the div element for grid layout
const gridDiv = document.createElement('div');
gridDiv.setAttribute('class', 'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3');

// Blog Post 1
const blogPost1Div = document.createElement('div');
blogPost1Div.innerHTML = `
    <div class="relative">
        <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="../../assests/images/blog-2.png" alt="" />
        <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
            <img class="object-cover object-center w-10 h-10 rounded-full" src="../../assests/images/avatar.jpg" alt="" />
            <div class="mx-4">
                <h1 class="text-sm text-gray-700 dark:text-gray-200">Kushargra Pandey</h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">Mobile & IOS Development</p>
            </div>
        </div>
    </div>
    <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">What is Mobile App development</h1>
    <p class="text-sm text-gray-500 dark:text-gray-400 pt-10">There are two dominant platforms in the modern smartphone market. One is the iOS platform from Apple Inc</p>
    <div class="text-center">
        <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5">
            <a href="./what-is-mobile-app-development.html">Explore this blog</a>
        </button>
    </div>
`;

// Blog Post 2
const blogPost2Div = document.createElement('div');
blogPost2Div.innerHTML = `
    <div class="relative">
        <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://www.mooc.org/hubfs/learn-mobile-app-development-jpg.jpeg" alt="" />
        <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
            <img class="object-cover object-center w-10 h-10 rounded-full" src="../../assests/images/avatar.jpg" alt="" />
            <div class="mx-4">
                <h1 class="text-sm text-gray-700 dark:text-gray-200">Vineet Jadhav</h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">Android & IOS Development</p>
            </div>
        </div>
    </div>
    <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">IOS vs. Android App Development: What's the Difference?</h1>
    <p class="text-sm text-gray-500 dark:text-gray-400 pt-3">The two most popular smartphone operating systems are Apple’s iOS and Google’s Android. When making mobile</p>
    <div class="text-center">
        <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5">
            <a href="./IOSvsAndroiddiffernce.html">Explore this blog</a>
        </button>
    </div>
`;

// Append blog posts to the grid div
gridDiv.appendChild(blogPost1Div);
gridDiv.appendChild(blogPost2Div);

// Append grid div to container-blog div
containerBlogDiv.appendChild(gridDiv);

// Append heading and container-blog div to the Blog section
blogSection.appendChild(blogHeading);
blogSection.appendChild(containerBlogDiv);

// Append the Blog section to the body
document.body.appendChild(blogSection);
