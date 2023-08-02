
const GroupLink = () => {
  window.open("https://chat.whatsapp.com/Ifc2cxkRaBkJf9LUCXYzgD")
}

// loader 
window.addEventListener('load', function () {
  var loadingAnimation = document.getElementById('loading-animation');
  loadingAnimation.style.display = 'none';
});


// blog section
// Create a function to convert the HTML code to JavaScript
// Create a function to convert the HTML code to JavaScript
function createBlogSection() {
  const section = document.createElement('section');
  section.classList.add('bg-gray-100', 'dark:bg-gray-900');
  section.id = 'Blog';

  const heading = document.createElement('h1');
  heading.classList.add('blog-head', 'text-5xl', 'text-white', 'font-bold', 'text-center');
  heading.textContent = 'Feature Blog Post';

  const container = document.createElement('div');
  container.classList.add('container-blog', 'mx-auto', 'py-8', 'lg:pl-28', 'lg:pr-28');

  const grid = document.createElement('div');
  grid.classList.add('grid', 'grid-cols-1', 'gap-8', 'md:grid-cols-2', 'lg:grid-cols-3');

  // Blog Post 1
  const blogPost1 = createBlogPost(
    'https://www.totalphase.com/media/blog/2022/11/960x0.jpg',
    './assests/images/avatarman.png',
    'Siva Teja Cherukupalli',
    'Artificial Intelligence',
    '"Prompts" in AI is challenging task in Future.?',
    'In the context of AI, a "Prompt" is a piece of text or instruction provided to an AI model to guide its',
    './articles/Machine Learning/PromptsinAIischallengingtaskinFuture.html'
  );

  // Blog Post 2
  const blogPost2 = createBlogPost(
    './assests/images/blog-5.png',
    './assests/images/author1.png',
    'Anshul Soni',
    'Web Development',
    'Adaptive loading: improving web performance on slow devices',
    'Device capabilities and network connections vary a lot. Sites that delight users on high-end devices can be unusable on low-end',
    './articles/Web development/adaptive-learning.html'
  );

  // Blog Post 3
  const blogPost3 = createBlogPost(
    'https://cdn.discordapp.com/attachments/1052532080589946892/1068822153123856424/1674894312901.png',
    './assests/images/avatar.jpg',
    'vineet Jadhav',
    'Web Development',
    'How to Start with FrontEnd Development?',
    'Frontend development is a crucial aspect of web development that involves creating the visual and interactive elements',
    './articles/Web development/How-to-start-with-frontend-development.html'
  );

  // Append all blog posts to the grid
  grid.appendChild(blogPost1);
  grid.appendChild(blogPost2);
  grid.appendChild(blogPost3);

  // Append everything to the DOM
  container.appendChild(grid);
  section.appendChild(heading);
  section.appendChild(container);

  // Find a parent element to attach the section to, and then append the section
  const parentElement = document.getElementById('Blog');
  parentElement.appendChild(section);
}

function createBlogPost(imageSrc, authorImgSrc, authorName, authorRole, title, description, link) {
  const blogPost = document.createElement('div');

  const blogPostImgContainer = document.createElement('div');
  blogPostImgContainer.classList.add('relative');

  const blogPostImg = document.createElement('img');
  blogPostImg.classList.add('object-cover', 'object-center', 'w-full', 'h-64', 'rounded-lg', 'lg:h-80');
  blogPostImg.src = imageSrc;
  blogPostImg.alt = '';

  const blogPostAuthorInfo = document.createElement('div');
  blogPostAuthorInfo.classList.add('absolute', 'bottom-0', 'flex', 'p-3', 'bg-white', 'dark:bg-gray-900');

  const blogPostAuthorImg = document.createElement('img');
  blogPostAuthorImg.classList.add('object-cover', 'object-center', 'w-10', 'h-10', 'rounded-full');
  blogPostAuthorImg.src = authorImgSrc;
  blogPostAuthorImg.alt = '';

  const blogPostAuthorDetails = document.createElement('div');
  blogPostAuthorDetails.classList.add('mx-4');

  const blogPostAuthorName = document.createElement('h1');
  blogPostAuthorName.classList.add('text-sm', 'text-gray-700', 'dark:text-gray-200');
  blogPostAuthorName.textContent = authorName;

  const blogPostAuthorRole = document.createElement('p');
  blogPostAuthorRole.classList.add('text-sm', 'text-gray-500', 'dark:text-gray-400');
  blogPostAuthorRole.textContent = authorRole;

  const blogPostTitle = document.createElement('h1');
  blogPostTitle.classList.add('mt-6', 'text-xl', 'font-semibold', 'text-gray-800', 'dark:text-white');
  blogPostTitle.textContent = title;

  const blogPostDescription = document.createElement('p');
  blogPostDescription.classList.add('text-sm', 'text-gray-500', 'dark:text-gray-400', 'pt-6');
  blogPostDescription.textContent = description;

  const blogPostButton = document.createElement('button');
  blogPostButton.type = 'button';
  blogPostButton.classList.add(
    'text-white',
    'bg-gradient-to-r',
    'from-cyan-500',
    'to-blue-500',
    'hover:bg-gradient-to-bl',
    'focus:ring-4',
    'focus:outline-none',
    'focus:ring-cyan-300',
    'dark:focus:ring-cyan-800',
    'font-medium',
    'rounded-lg',
    'text-sm',
    'px-5',
    'py-2.5',
    'text-center',
    'mr-2',
    'mb-2',
    'mt-5'
  );

  const blogPostLink = document.createElement('a');
  blogPostLink.href = link;
  blogPostLink.textContent = 'Explore this blog';

  // Append all the elements accordingly
  blogPostButton.appendChild(blogPostLink);

  blogPostAuthorDetails.appendChild(blogPostAuthorName);
  blogPostAuthorDetails.appendChild(blogPostAuthorRole);

  blogPostAuthorInfo.appendChild(blogPostAuthorImg);
  blogPostAuthorInfo.appendChild(blogPostAuthorDetails);

  blogPostImgContainer.appendChild(blogPostImg);
  blogPostImgContainer.appendChild(blogPostAuthorInfo);

  blogPost.appendChild(blogPostImgContainer);
  blogPost.appendChild(blogPostTitle);
  blogPost.appendChild(blogPostDescription);
  blogPost.appendChild(blogPostButton);

  return blogPost;
}

// Call the function to create the blog section
createBlogSection();


// Community Section
function createCommunityPartnersSection() {
  // Create the section element
  const section = document.createElement('section');
  section.classList.add('bg-white', 'dark:bg-gray-900', 'pt-16');

  // Create the container div
  const container = document.createElement('div');
  container.classList.add('container', 'px-6', 'py-10', 'mx-auto');
  container.id = 'Team';

  // Create the heading element
  const heading = document.createElement('h1');
  heading.classList.add('text-4xl', 'font-semibold', 'text-center', 'text-gray-800', 'capitalize', 'lg:text-3xl', 'dark:text-white');
  heading.textContent = 'Our Community Partners';

  // Create the flex wrapper for partner cards
  const partnerWrapper = document.createElement('div');
  partnerWrapper.classList.add('flex', 'flex-wrap', 'justify-center', 'mt-8');

  // Function to create a partner card
  function createPartnerCard(imageSrc, name) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const card = document.createElement('div');
    card.classList.add('flex', 'flex-col', 'items-center', 'w-64', 'p-4', 'transition-colors', 'duration-300', 'transform', 'border', 'cursor-pointer', 'rounded-xl', 'hover:border-transparent', 'group', 'hover:bg-blue-600', 'dark:border-gray-700', 'dark:hover:border-transparent');

    const image = document.createElement('img');
    image.classList.add('object-fill', 'h-56', 'rounded-lg', 'ring-4', 'ring-gray-300');
    image.src = imageSrc;
    image.alt = '';

    const partnerName = document.createElement('h1');
    partnerName.classList.add('text-3xl', 'font-medium', 'text-white', 'mt-3');
    partnerName.textContent = name;

    card.appendChild(image);
    card.appendChild(partnerName);
    cardContainer.appendChild(card);

    return cardContainer;
  }

  // Create partner cards
  const partner1 = createPartnerCard('./assests/logo/community-partner/SOS-tech.png', 'SOS Tech');
  const partner2 = createPartnerCard('./assests/logo/community-partner/Tech Surfer.png', 'Tech Surfers');
  const partner3 = createPartnerCard('./assests/logo/community-partner/dev code community.jpg', 'Dev Code');
  const partner4 = createPartnerCard('./assests/images/gdcludhiana.jpg', 'GDG Ludhiana');

  // Append partner cards to the wrapper
  partnerWrapper.appendChild(partner1);
  partnerWrapper.appendChild(partner2);
  partnerWrapper.appendChild(partner3);
  partnerWrapper.appendChild(partner4);

  // Append all elements to their respective parents
  container.appendChild(heading);
  container.appendChild(partnerWrapper);
  section.appendChild(container);

  // Find a parent element to attach the section to, and then append the section
  const parentElement = document.getElementById('Community');
  parentElement.appendChild(section);
}

// Call the function to create the community partners section
createCommunityPartnersSection();
