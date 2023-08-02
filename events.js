function createEventCard(eventData) {
  const article = document.createElement('article');
  article.className = 'col';
  const div = document.createElement('div');
  div.className = 'bg-white position-relative shadow-lg rounded-4 overflow-hidden';
  div.innerHTML = eventData; // You can directly set the HTML content for each event

  article.appendChild(div);
  return article;
}

// Function to add events to the event container
function addEventsToContainer() {
  const eventContainer = document.getElementById('eventContainer');

  // Example event data, you can modify this data with real event data fetched from an API or other sources
  const eventData1 = `
      <div class="bg-white position-relative shadow-lg rounded-4 overflow-hidden">
      <div class="ratio ratio-16x9">
        <img
          src="https://flow-hackathon-s2.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F633065500193427091033d2cfc2621e6%2Fassets%2Fcover%2F94.jpeg&w=1440&q=100"
          alt="..." class="object-fit-cover" />
      </div>
      <div class="p-4 pt-2 event-card-body position-relative rounded-4" style="z-index:1">
        <h5 class="fw-bold mb-3">Flow Hackathon Season 2
        </h5>
        <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-2">
          <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
            <i class="fa-solid fa-location-dot"></i>
          </span>
          Online Event
        </div>
        <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
          <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
            <i class="fa-solid fa-calendar-days"></i>
          </span>
          Runs from- Jun 15 - Jul 16, 2023

        </div>
        <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
          <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
            <i class="fa-solid fa-building"></i>
          </span>
          Devfolio
        </div>

        <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
          <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
            <i class="fa fa-money"></i>
          </span>
          Free or Paid Event
        </div>
        <p class="fw-bold mb-0">About the Event</p>
        <p class="mb-3">
          The Flow to the Future hackathon is a virtual global contest with $500K in prizes. It invites web3
          builders to explore on-chain logic's full potential, from DeFi to gaming. The 6 tracks include Gaming,
          AI, DeFi, Mobile, Tooling, Infrastructure, and a general track.</p>
        <a class="btn btn-danger

w-100" href="https://flow-hackathon-s2.devfolio.co/">Register For This Event <i
            class="bi bi-arrow-right-circle"></i></a>
      </div>
    </div>
    `;

  const eventData2 = `
      <div class="bg-white position-relative shadow-lg rounded-4 overflow-hidden">
      <div class="ratio ratio-16x9">
        <img
          src="data:image/png;base64,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"
          alt="..." class="object-fit-cover" />
      </div>
      <div class="p-4 pt-2 event-card-body position-relative rounded-4" style="z-index:1">
        <h5 class="fw-bold mb-3">DevOps Bootcamp</h5>
        <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-2">
          <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
            <i class="fa-solid fa-location-dot"></i>
          </span>
          Virtual event
        </div>
        <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
          <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
            <i class="fa-solid fa-calendar-days"></i>
          </span>
          Runs from- July 1 - July 7, 2023
        </div>
        <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
          <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
            <i class="fa-solid fa-building"></i>
          </span>
          LisicaTech
        </div>
        <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
          <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
            <i class="fa fa-money"></i>
          </span>
          Free
        </div>
        <p class="fw-bold mb-0">About the Event</p>
        <p class="mb-3">
          Discover DevOps! Join our free online bootcamp for beginners. No experience required. Learn essentials
          in one week and embark on an exciting journey. Enroll today, fuel your enthusiasm!

          .</p>
        <a class="btn btn-danger w-100" href="https://lnkd.in/dvSWZaP2">Register For This Event <i
            class="bi bi-arrow-right-circle"></i></a>
      </div>
    </div>
    `;

  const eventData3 = `
      <div class="bg-white position-relative shadow-lg rounded-4 overflow-hidden">
      <div class="ratio ratio-16x9">
        <img src="https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity.jpg" alt="..."
          class="object-fit-cover" />
      </div>
      <div class="p-4 pt-2 event-card-body position-relative rounded-4" style="z-index:1">
        <h5 class="fw-bold mb-3">Cyber Security enthusiasts </h5>
        <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-2">
          <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
            <i class="fa-solid fa-location-dot"></i>
          </span>
          Virtual event
        </div>
        <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
          <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
            <i class="fa-solid fa-calendar-days"></i>
          </span>
          July 17, 2023-10 AM
        </div>
        <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
          <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
            <i class="fa fa-user-circle"></i>
          </span>

          Dheeraj Yadav,
          Cybersecurity Researcher
          Subject Matter Expert, KnowledgeHut
        </div>
        <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
          <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
            <i class="fa fa-money"></i>
          </span>
          Free
        </div>
        <p class="fw-bold mb-0">About the Event</p>
        <p class="mb-3">Join our engaging Cybersecurity Seminar! Explore digital defense, learn from experts, and
          protect against online threats. Expand your knowledge in this vital field. Secure your spot now! 💻🛡
        </p>
        <a class="btn btn-danger w-100"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe4kMFPsFCQ-RWwzD9XD61MJDbgsAhdca7KntrXncXAqDPNjg/viewform">Register
          For This Event <i class="bi bi-arrow-right-circle"></i></a>
      </div>
      </div>
    `;

  const eventData4 = `
    <div class="bg-white position-relative shadow-lg rounded-4 overflow-hidden">
    <div class="ratio ratio-16x9">
      <img
        src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_150,q_auto:good,w_150/v1/gcs/platform-data-goog/event_type_logos/Screenshot_2023-01-02_at_10.18.12_AM_mGpw3xV_kJOQVUu_ei79VQF_Hqy4HB8_ix_5x47DE6.png"
        alt="..." class="object-fit-cover" />
    </div>
    <div class="p-4 pt-2 event-card-body position-relative rounded-4" style="z-index:1">
      <h5 class="fw-bold mb-3">Mastering Git and GitHub </h5>
      <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-2">
        <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
          <i class="fa-solid fa-location-dot"></i>
        </span>
        Virtual event
      </div>
      <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
        <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
          <i class="fa-solid fa-calendar-days"></i>
        </span>
        22nd July, 2023-7PM
      </div>
      <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
        <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
          <i class="fa-solid fa-building"></i>
        </span>
        GDG Ludhiana
      </div>
      <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
        <span class="bg-danger bg-opacity-25 text-danger px-2 py-1 rounded-3">
          <i class="fa fa-user-circle"></i>
        </span>
        Anshul Soni & Divjot Singh Arora
      </div>
      <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
        <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
          <i class="fa fa-money"></i>
        </span>
        Free
      </div>
      <p class="fw-bold mb-0">About the Event</p>
      <p class="mb-3">Become a Git and GitHub master! Elevate your skills in version control, collaboration,
        branching, merging, and conflict resolution. Learn advanced features, best practices, and efficient
        workflows. Join our event to unleash your development potential! Perfect for beginners and
        experienced developers
      </p>
      <a class="btn btn-danger w-100"
        href="https://gdg.community.dev/events/details/google-gdg-ludhiana-presents-mastering-git-github/">Register
        For This Event <i class="bi bi-arrow-right-circle"></i></a>
    </div>
  </div>
    `
  // Create and add event articles to the container
  eventContainer.appendChild(createEventCard(eventData1));
  eventContainer.appendChild(createEventCard(eventData2));
  eventContainer.appendChild(createEventCard(eventData3));
  eventContainer.appendChild(createEventCard(eventData4));
}

// Call the function to add events to the container
addEventsToContainer();
// Function to add past events to the container
function addPastEventsToContainer() {
  const pastEventContainer = document.getElementById('pastEventContainer');

  // Example past event data, you can modify this data with real event data fetched from an API or other sources
  const pastEventData1 = `
      <div class="bg-white position-relative shadow-lg rounded-4 overflow-hidden">
            <div class="ratio ratio-16x9">
              <img
                src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_150,q_auto:good,w_150/v1/gcs/platform-data-goog/event_type_logos/Screenshot_2023-01-02_at_10.18.12_AM_mGpw3xV_kJOQVUu_ei79VQF_Hqy4HB8_ix_5x47DE6.png"
                alt="..." class="object-fit-cover" />
            </div>
            <div class="p-4 pt-2 event-card-body position-relative rounded-4" style="z-index:1">
              <h5 class="fw-bold mb-3">Capitalizing on Opportunities as They Arise by Nitya Pasrija</h5>
              <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-2">
                <span class="bg-danger

 bg-opacity-25 text-danger

 px-2 py-1 rounded-3">
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                Virtual event
              </div>
              <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
                <span class="bg-danger

 bg-opacity-25 text-danger

 px-2 py-1 rounded-3">
                  <i class="fa-solid fa-calendar-days"></i>
                </span>
                17/06/2023 - 7:00
              </div>
              <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
                <span class="bg-danger

 bg-opacity-25 text-danger

 px-2 py-1 rounded-3">
                  <i class="fa-solid fa-building"></i>
                </span>
                GDG Ludhiana
              </div>
              <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
                <span class="bg-danger bg-opacity-25 text-danger px-2 py-1 rounded-3">
                  <i class="fa fa-user-circle"></i>
                </span>
                Nitya Pasrija
              </div>
              <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
                <span class="bg-danger

 bg-opacity-25 text-danger

 px-2 py-1 rounded-3">
                  <i class="fa fa-money"></i>
                </span>
                Free
              </div>

              <p class="fw-bold mb-0">About the Event</p>
              <p class="mb-3">Discover how to seize opportunities, fuel personal and professional growth. Perfect for
                entrepreneurs, professionals, and aspiring leaders. Gain skills, mindset, make the most of every
                opportunity. Topics include assessing opportunities, strategic thinking, overcoming challenges, decisive
                action, and maximizing impact. Join now!</p>
              <a class="btn btn-danger w-100"
                href="https://gdg.community.dev/events/details/google-gdg-ludhiana-presents-capitalizing-on-opportunities-as-they-arise-by-nitya-pasrija/">Registration
                closed</a>
            </div>
          </div>
    `;

  const pastEventData2 = `
  
      <div class="ratio ratio-16x9">
              <img
                src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_150,q_auto:good,w_150/v1/gcs/platform-data-goog/event_type_logos/Screenshot_2023-01-02_at_10.18.12_AM_mGpw3xV_kJOQVUu_ei79VQF_Hqy4HB8_ix_5x47DE6.png"
                alt="..." class="object-fit-cover" />
            </div>
            <div class="p-4 pt-2 event-card-body position-relative rounded-4" style="z-index:1">
              <h5 class="fw-bold mb-3">Introduction to Chrome Developer Tools - Part 2
              </h5>
              <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-2">
                <span class="bg-danger

 bg-opacity-25 text-danger

 px-2 py-1 rounded-3">
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                Virtual Event
              </div>
              <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
                <span class="bg-danger

 bg-opacity-25 text-danger

 px-2 py-1 rounded-3">
                  <i class="fa-solid fa-calendar-days"></i>
                </span>
                22/06/2023 - 7:00
              </div>
              <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
                <span class="bg-danger

 bg-opacity-25 text-danger

 px-2 py-1 rounded-3">
                  <i class="fa-solid fa-building"></i>
                </span>
                GDG Ludhiana
              </div>
              <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
                <span class="bg-danger

 bg-opacity-25 text-danger

 px-2 py-1 rounded-3">
                  <i class="fa fa-user-circle"></i>
                </span>
                Shreyan Mehta
              </div>
              <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
                <span class="bg-danger

 bg-opacity-25 text-danger

 px-2 py-1 rounded-3">
                  <i class="fa fa-money"></i>
                </span>
                Free
              </div>
              <p class="fw-bold mb-0">About the Event</p>
              <p class="mb-3">
                Unleash Chrome Developer Tools' potential at our event! Perfect for all skill levels, discover tools
                that transform debugging and optimization. Learn: Inspect/alter HTML, CSS, JS; Efficiently debug;
                Optimize network activity; Rapid development with console commands; Maximize web dev with advanced
                features.</p>
              <a class="btn btn-danger
 w-100" href="https://gdg.community.dev/events/details/google-gdg-ludhiana-presents-introduction-to-chrome-developer-tools-part-2/">Registration
                closed</a>
            </div>
         
    `;

  const pastEventData3 = `
      <div class="ratio ratio-16x9">
              <img
                src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_150,q_auto:good,w_150/v1/gcs/platform-data-goog/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_xIIW2IO.png"
                alt="..." class="object-fit-cover" />
            </div>
            <div class="p-4 pt-2 event-card-body position-relative rounded-4" style="z-index:1">
              <h5 class="fw-bold mb-3">Python For Data Science by Aaron P Laju
              </h5>
              <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-2">
                <span class="bg-danger

 bg-opacity-25 text-danger

 px-2 py-1 rounded-3">
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                Offline Event
              </div>
              <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
                <span class="bg-danger

 bg-opacity-25 text-danger

 px-2 py-1 rounded-3">
                  <i class="fa-solid fa-calendar-days"></i>
                </span>
                01/06/2023 - 7:00
              </div>
              <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
                <span class="bg-danger

 bg-opacity-25 text-danger

 px-2 py-1 rounded-3">
                  <i class="fa-solid fa-building"></i>
                </span>
                GDG Ludhiana
              </div>
              <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
                <span class="bg-danger

 bg-opacity-25 text-danger

 px-2 py-1 rounded-3">
                  <i class="fa fa-user-circle"></i>
                </span>
                Aaron P Laju

              </div>
              <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
                <span class="bg-danger

 bg-opacity-25 text-danger

 px-2 py-1 rounded-3">
                  <i class="fa fa-money"></i>
                </span>
                Free
              </div>
              <p class="fw-bold mb-0">About the Event</p>
              <p class="mb-3">
                Unleash Python's data science power! Join our event to explore data analysis, visualization, and machine
                learning with Python. Beginner or pro, dive into Python fundamentals, pandas, and more. Don't miss this
                opportunity!</p>
              <a class="btn btn-danger w-100"
                href="https://gdg.community.dev/events/details/google-gdg-ludhiana-presents-python-for-data-science-by-aaron-p-laju/">Registration
                closed</a>
            </div>
          </div>
    `;

  const pastEventData4 = `
    <div class="bg-white position-relative shadow-lg rounded-4 overflow-hidden">
    <div class="ratio ratio-16x9">
      <img src="https://cdn.discordapp.com/attachments/1052546479346159697/1118489281720225792/image.png"
        alt="..." class="object-fit-cover" />
    </div>
    <div class="p-4 pt-2 event-card-body position-relative rounded-4" style="z-index:1">
      <h5 class="fw-bold mb-3">Shardeum X Rising Capital Web3 meetup @ Bengaluru : VC Edition</h5>
      <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-2">
        <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
          <i class="fa-solid fa-location-dot"></i>
        </span>
        Offline Event
      </div>
      <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
        <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
          <i class="fa-solid fa-calendar-days"></i>
        </span>
        24/06/2023 - Hours:Minutes
      </div>
      <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
        <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
          <i class="fa-solid fa-building"></i>
        </span>
        Shardeum X Rising Capital
      </div>
      <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
        <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
          <i class="fa fa-user-circle"></i>
        </span>

        Loveneesh Dhir,
        Ramprasad Vinayagamoorthy,
        Shivangi Pandey
      </div>
      <div class="d-flex align-items-center justify-content-start gap-2 small text-black text-opacity-75 mb-3">
        <span class="bg-danger

bg-opacity-25 text-danger

px-2 py-1 rounded-3">
          <i class="fa fa-money"></i>
        </span>
        Free Event
      </div>
      <p class="fw-bold mb-0">About the Event</p>
      <p class="mb-3">Seeking feedback and exposure for your product? Present to VCs, web3 enthusiasts, and the
        Shardeum ecosystem at Proof of Community - VC Edition. Share achievements, recruit talent, and gain
        project feedback. Join us in Bengaluru to connect with the Web3 community! No funding commitment.</p>
      <a class="btn btn-danger

w-100">Registration closed</a>
    </div>
    `

  // Create and add past event articles to the container
  pastEventContainer.appendChild(createEventCard(pastEventData1));
  pastEventContainer.appendChild(createEventCard(pastEventData2));
  pastEventContainer.appendChild(createEventCard(pastEventData3));
  pastEventContainer.appendChild(createEventCard(pastEventData4));
}

// Call the functions to add upcoming and past events to their respective containers
addPastEventsToContainer();