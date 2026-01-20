let currentPage = 1; // Start with the first set of pages visible

function flipPage() {
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    const pages = document.querySelectorAll('.page-content');
    const pagesCount = 17

    if (!isPortrait) {
        currentPage += 2;
        if (currentPage > pagesCount) currentPage = 1;
        pages[0].innerHTML = getPage(currentPage)
        pages[1].innerHTML = getPage(currentPage + 1)
    } else {
        currentPage += 1;
        if (currentPage > pagesCount) currentPage = 1;
        pages[0].innerHTML = getPage(currentPage)
    }


}

function getPage(index) {
    let finalElement = ''
    if (index == 1) {
        finalElement = `<h1 style="padding-top: 100px; text-align:center;">The History Of Pepe</h1>`
    } else if (index == 2) {
        finalElement =  `<h3>I. The Genesis of the Internet</h3>
        <p>
            In the beginning, the Internet was a void of information, disconnected and unshared. Then came the World Wide Web, weaving a digital tapestry that would connect the world in ways previously unimaginable.
            
            
            
            
            </p>
        `;
    } else if (index == 3) {
        finalElement =  `<h3>II. The Rise of Memes</h3>
        <p>
        Memes, the offspring of the Internet's creative chaos, emerged as cultural phenomena transcending borders, languages, and cultures, carrying humor and messages that resonated with a global audience.
        
            
        </p>`;
    } else if (index == 4) {
        finalElement =  `<h3>III. Memecoins on the Ethereum Blockchain</h3>
        <p>
        The Ethereum blockchain, like a cosmic forge, gave birth to a new breed of digital assets: memecoins. These tokens, inspired by memes and fueled by community, have transformed the landscape of crypto, turning internet humor into tangible value. 
            
        </p>`;
    } else if (index == 5) {
        finalElement = `<h3>IV. The Evolution of Memecoins</h3>
        <p>
        As the Ethereum ecosystem grew, so did the variety and influence of memecoins. The emergence of Pepecoin, Grok, and other memecoins showcased the potential of these digital assets to tap into contemporary culture and technological trends.   
        
        </p>`;
    }  else if (index == 6) {
        finalElement = `<h3>V. The Emergence of Pepecoin</h3>
        <p>
        Among the first memecoins to capture the attention of the Ethereum community was Pepecoin, inspired by the iconic Pepe the Frog meme, which quickly became a symbol of internet culture and the power of memes to transcend their digital origins.
        </p>`;
    }  else if (index == 7) {
        finalElement = `<h3>VI. The Birth of Grok</h3>
        <p>
        Grok, a memecoin inspired by the world of artificial intelligence and the musings of Elon Musk, showcased the potential of memecoins to tap into contemporary culture and technological trends.    
        
        </p>`;
    }  else if (index == 8) {
        finalElement = `<h3>VII. The Future of Memecoins</h3>
        <p>
        As memecoins grow, they showcase the influence of humor, creativity, and community in digital innovation. They also highlight blockchain's potential to revolutionize our interactions, transactions, and value creation.
        </p>`;
    }  else if (index == 9) {
        finalElement = `<h3>VIII. The Integration of Memecoins and DeFi</h3>
        <p>
        The rise of memecoins on Ethereum marked a novel era in finance and internet culture. Their value wasn't just based on utility and scarcity but also on memes and community fervor.
        </p>`;
    }  else if (index == 10) {
        finalElement = `<h3>IX. The Role of Memecoins in Community Building</h3>
        <p>
        The emergence of memecoins on Ethereum emphasized the significance of community in crypto. These tokens became hubs for people to unite, fostering collaboration and a collective sense of purpose and belonging.
        </p>`;
    }  else if (index == 11) {
        finalElement = `<h3>X. Challenges and Opportunities</h3>
        <p>
        Memecoins encounter regulatory uncertainty and market swings, yet offer promising prospects for advancement and creativity. Overcoming these hurdles is vital for their sustained success and community prosperity.
        </p>`;
    }  else if (index == 12) {
        finalElement = `<h3>XI. The Potential Impact of Memecoins on Society</h3>
        <p>
Memecoins have the potential to drive social impact and serve as a force for good in the digital world, by aligning with charitable causes and incorporating utility features.    
        
        </p>`;
    }  else if (index == 13) {
        finalElement = `<h3>XII. Regulation and Security in Memecoin Trading</h3>
        <p>
        As memecoins rise in popularity, the need for regulation and security in their trading becomes increasingly evident, guaranteeing a secure and equitable market for everyone involved.
        </p>`;
    }  else if (index == 14) {
        finalElement = `<h3>XIII. A Bridge Between Digital and Real-World Value</h3>
        <p>
        Memecoins have the potential to bridge the gap between digital and real-world value, offering a new way for individuals to engage with and support causes and communities they care about.    
        
        </p>`;
    }  else if (index == 15) {
        finalElement = `<h3>XIV. The Influence of Memecoins on the Future of Crypto</h3>
        <p>
        The popularity of memecoins could have a significant impact on the broader cryptocurrency ecosystem, influencing the development of new digital assets and the role of humor and community in the crypto space.    
        
        </p>`;
    }  else if (index == 16) {
        finalElement = `<h3>XV. The Role of Memecoins in the Metaverse</h3>
        <p>
        As the concept of the metaverse continues to evolve, memecoins could play a crucial role in shaping the digital economy and providing a means of exchange and value creation in virtual environments.    
        
        </p>`;
    }  else if (index == 17) {
        finalElement = `<h3>XVI. The Potential of Memecoins as Decentralized Currencies for the Near Future</h3>
        <p>
        Memecoins have the potential to serve as decentralized currencies in the near future, offering a new way for individuals to engage in peer-to-peer transactions and store value in a digital world increasingly dominated by cryptocurrencies.
        </p>`;
    } 
    
    
    else {
        return `<h3></h3><p></p>`
    }
    
    finalElement += '<div class="bible-image-div"><img src="images/bible-images/' + (index - 1) + '.jpg" class="bible-image"></div>';
    return finalElement
}

// Initial setup to display the first two pages without waiting for the first click
document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page-content');
    pages[0].innerHTML = getPage(1)
    pages[1].innerHTML = getPage(2)
    

    const leftPage = document.querySelector('.left-page');
    const rightPage = document.querySelector('.right-page');

    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    leftPage.addEventListener('click', function() {
        flipPage(isPortrait ? 'forward' : 'backward');
    });

    rightPage.addEventListener('click', function() {
        flipPage('forward');
    });
});
