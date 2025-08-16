document.addEventListener('DOMContentLoaded', () => {
    const aiToolsGrid = document.getElementById('ai-tools-grid');
    const searchBox = document.getElementById('search-box');
    const dialog = document.getElementById('dialog');
    const dialogTitle = document.getElementById('dialog-title');
    const dialogDescription = document.getElementById('dialog-description');
    const dialogYoutubeLinks = document.getElementById('dialog-youtube-links');
    const closeButton = document.querySelector('.close-button');

    let aiTools = [];

    // Fetch AI tools data
    // In a real application, this would be an API call
    const fetchAiTools = () => {
        // Manually curated list of AI tools
        aiTools = [
            {
                name: 'ChatGPT',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png',
                link: 'https://chat.openai.com/',
                description: 'A large language model-based chatbot developed by OpenAI.',
                youtube: ['https://www.youtube.com/watch?v=JTxsNm9IdYU']
            },
            {
                name: 'Midjourney',
                logo: 'https://media.wired.com/photos/62a95c6b1a134d2f34607a22/master/w_2560%2Cc_limit/midjourney_logo_h_2560.webp',
                link: 'https://www.midjourney.com/',
                description: 'An independent research lab that produces a proprietary artificial intelligence program that creates images from textual descriptions.',
                youtube: ['https://www.youtube.com/watch?v=X3b_tP02-eI']
            },
            {
                name: 'DALL-E 2',
                logo: 'https://images.openai.com/blob/539486f2-b054-4f51-b444-a95751613a46/dall-e-2.jpg?trim=0,0,0,0',
                link: 'https://openai.com/dall-e-2/',
                description: 'A new AI system that can create realistic images and art from a description in natural language.',
                youtube: ['https://www.youtube.com/watch?v=qhtk_hV4b-I']
            },
            {
                name: 'Notion AI',
                logo: 'https://www.notion.so/images/meta/default.png',
                link: 'https://www.notion.so/product/ai',
                description: 'An AI-powered assistant that helps you write, brainstorm, and organize your thoughts.',
                youtube: ['https://www.youtube.com/watch?v=y_3-x9A4V9k']
            },
            {
                name: 'Synthesia',
                logo: 'https://assets-global.website-files.com/61dc0796f359879233543b17/61fd861e62506c78a83669f2_Primary_logo_on_dark_new.svg',
                link: 'https://www.synthesia.io/',
                description: 'An AI video generation platform that allows you to create videos with AI avatars and voices.',
                youtube: ['https://www.youtube.com/watch?v=6c4_r6i-i-g']
            },
            {
                name: 'Runway',
                logo: 'https://assets-global.website-files.com/6176a3f4e2f3a675e2978b3a/6176a3f4e2f3a62d04978b8f_Runway-Logo-dark.svg',
                link: 'https://runwayml.com/',
                description: 'A next-generation video editor with powerful AI tools.',
                youtube: ['https://www.youtube.com/watch?v=pXc_vI2-FpY']
            },
            {
                name: 'Canva',
                logo: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Canva_Logo.svg',
                link: 'https://www.canva.com/',
                description: 'A popular online design tool with AI-powered features for creating graphics, presentations, and videos.',
                youtube: ['https://www.youtube.com/watch?v=ujBj0PRHWEs']
            },
            {
                name: 'Fathom',
                logo: 'https://fathom.video/assets/logos/logo-fathom-black.svg',
                link: 'https://fathom.video/',
                description: 'An AI meeting assistant that records, transcribes, and summarizes your meetings.',
                youtube: ['https://www.youtube.com/watch?v=pnB2Sj43W4A']
            },
            {
                name: 'GitHub Copilot',
                logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/githubcopilot.png',
                link: 'https://github.com/features/copilot',
                description: 'An AI pair programmer that offers autocomplete-style suggestions as you code.',
                youtube: ['https://www.youtube.com/watch?v=n0NlxUyA7FI']
            },
            {
                name: 'Grammarly',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Grammarly_Logo.svg/2560px-Grammarly_Logo.svg.png',
                link: 'https://www.grammarly.com/',
                description: 'An AI-powered writing assistant that checks for spelling, grammar, and style.',
                youtube: ['https://www.youtube.com/watch?v=hF0m1rP9wgY']
            },
            {
                name: 'Jasper',
                logo: 'https://www.jasper.ai/media/Jasper-Logomark-wordmark-dark.png',
                link: 'https://www.jasper.ai/',
                description: 'A generative AI platform that helps you create marketing copy, blog posts, and more.',
                youtube: ['https://www.youtube.com/watch?v=S-s3z3S2A8A']
            },
            {
                name: 'Claude',
                logo: 'https://www.anthropic.com/images/claude_with_shadow.png',
                link: 'https://www.anthropic.com/claude',
                description: 'A next-generation AI assistant for your tasks, no matter the scale.',
                youtube: ['https://www.youtube.com/watch?v=rQ1_T_f2ytc']
            },
            {
                name: 'Perplexity AI',
                logo: 'https://www.perplexity.ai/static/images/logo/pplx-logo-dark.svg',
                link: 'https://www.perplexity.ai/',
                description: 'An AI-powered search engine that gives you direct answers to your questions.',
                youtube: ['https://www.youtube.com/watch?v=7g-Ua2gYI8k']
            }
        ];
        renderAiTools(aiTools);
    };

    // Render AI tools
    const renderAiTools = (tools) => {
        aiToolsGrid.innerHTML = '';
        tools.forEach(tool => {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridItem.innerHTML = `
                <a href="${tool.link}" target="_blank" rel="noopener noreferrer">
                    <img src="${tool.logo}" alt="${tool.name} logo">
                    <h3>${tool.name}</h3>
                </a>
                <button class="info-button">More Info</button>
            `;

            gridItem.querySelector('.info-button').addEventListener('click', () => {
                openDialog(tool);
            });

            aiToolsGrid.appendChild(gridItem);
        });
    };

    // Search functionality
    searchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredTools = aiTools.filter(tool => tool.name.toLowerCase().includes(searchTerm));
        renderAiTools(filteredTools);
    });

    // Dialog functionality
    const getYouTubeVideoId = (url) => {
        let videoId = '';
        try {
            const urlObj = new URL(url);
            videoId = urlObj.searchParams.get('v');
        } catch (error) {
            // If URL parsing fails, try a regex fallback for different URL formats
            const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
            const match = url.match(regex);
            if (match) {
                videoId = match[1];
            } else {
                console.error('Invalid YouTube URL:', url);
            }
        }
        return videoId;
    };

    const openDialog = (tool) => {
        dialogTitle.textContent = tool.name;
        dialogDescription.textContent = tool.description;

        dialogYoutubeLinks.innerHTML = '<h4>Usage Guides:</h4>';
        if (tool.youtube && tool.youtube.length > 0) {
            tool.youtube.forEach(link => {
                const videoId = getYouTubeVideoId(link);
                if (videoId) {
                    const iframe = document.createElement('iframe');
                    iframe.src = `https://www.youtube.com/embed/${videoId}`;
                    iframe.width = '100%';
                    iframe.height = '315';
                    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                    iframe.allowFullscreen = true;
                    iframe.style.border = 'none';
                    iframe.style.marginBottom = '10px';
                    dialogYoutubeLinks.appendChild(iframe);
                }
            });
        } else {
            dialogYoutubeLinks.innerHTML += '<p>No usage guides available.</p>';
        }

        dialog.style.display = 'block';
    };

    closeButton.addEventListener('click', () => {
        dialog.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === dialog) {
            dialog.style.display = 'none';
        }
    });

    // Initial fetch
    fetchAiTools();
});
