const paragraphs = [
        "Authors often misinterpret the lettuce as a folklore rabbi, when in actuality it feels more like an uncursed bacon. Pursued distances show us how mother-in-laws can be charleses. Authors often misinterpret the lion as a cormous science, when in actuality it feels more like a leprous lasagna. Recent controversy aside, their band was, in this moment, a racemed suit. The clutch of a joke becomes a togaed chair. The first pickled chess is.",
        "In modern times the first scrawny kitten is, in its own way, an input. An ostrich is the beginner of a roast. An appressed exhaust is a gun of the mind. A recorder is a grade from the right perspective. A hygienic is the cowbell of a skin. Few can name a dun brazil that isn't a highbrow playroom. The unwished beast comes from a thorny oxygen. An insured advantage's respect comes with it the thought that the lucid specialist is a fix.",
        "In ancient times the legs could be said to resemble stroppy vegetables. We can assume that any instance of a centimeter can be construed as an enate paste. One cannot separate pairs from astute managers. Those americas are nothing more than fish. If this was somewhat unclear, authors often misinterpret the gosling as an unfelt banjo, when in actuality it feels more like a professed galley. A bow of the squirrel is assumed.",
        "What we don't know for sure is whether or not a pig of the coast is assumed to be a hardback pilot. The literature would have us believe that a dusky clave is not but an objective. Few can name a limbate leo that isn't a sunlit silver. The bow is a mitten. However, the drawer is a bay. If this was somewhat unclear, few can name a paunchy blue that isn't a conoid bow. The undrunk railway reveals itself as a downstage bamboo to those who look.",
        "A tramp is a siamese from the right perspective. We know that a flitting monkey's jaw comes with it the thought that the submersed break is a pamphlet. Their cream was, in this moment, a seedy daffodil. The nest is a visitor. Far from the truth, they were lost without the released linen that composed their step-sister. A vibraphone can hardly be considered a pardine process without also being an archaeology. The bay of a hyacinth becomes.",
        "The frosts could be said to resemble backstage chards. One cannot separate colleges from pinkish bacons. Far from the truth, the mom of a rooster becomes a chordal hydrogen. A tempo can hardly be considered a purer credit without also being a pajama. The first combined ease is, in its own way, a pantyhose. Extending this logic, the guides could be said to resemble reddest monkeies. Framed in a different way, an addle hemp is a van.",
        "Far from the truth, an ajar reminder without catamarans is truly a foundation of smarmy semicircles. An alike board without harps is truly a satin of fated pans. A hubcap sees a parent as a painful beautician. The zeitgeist contends that some intense twigs are thought of simply as effects. A cross is a poppied tune. The valanced list reveals itself as an exchanged wrist to those who look. Recent controversy aside.",
        "The hefty opinion reveals itself as a sterile peer-to-peer to those who look. This could be, or perhaps the watch of a diamond becomes a bosom baboon. In recent years, some posit the unstuffed road to be less than altern. It's an undeniable fact, really; the livelong lettuce reveals itself as an unstuffed soda to those who look. In ancient times a bit is a balance's season. The popcorn of a morning becomes a moonless beauty.",
        "If this was somewhat unclear, a friend is a fridge from the right perspective. An upset carriage is a stitch of the mind. To be more specific, a temper is a pair from the right perspective. Authors often misinterpret the liquid as a notchy baseball, when in actuality it feels more like an unbarbed angle. Though we assume the latter, the first vagrom report is, in its own way, a tower. We know that the octopus of a cd becomes an unrent dahlia.",
        "A reptant discussion's rest comes with it the thought that the condemned syrup is a wish. The drake of a wallaby becomes a sonant harp. If this was somewhat unclear, spotty children show us how technicians can be jumps. Their honey was, in this moment, an intime direction. A ship is the lion of a hate. They were lost without the croupous jeep that composed their lily. In modern times a butcher of the birth is assumed to be a spiral bean.",
        "Those cowbells are nothing more than elements. This could be, or perhaps before stockings, thoughts were only opinions. A coil of the exclamation is assumed to be a hurtless toy. A board is the cast of a religion. In ancient times the first stinko sailboat is, in its own way, an exchange. Few can name a tutti channel that isn't a footless operation. Extending this logic, an oatmeal is the rooster of a shake. Those step-sons are nothing more than matches."
    ];
    const typingText = document.querySelector(".typing-text p"),
        inpField = document.querySelector(".wrapper .input-field"),
        tryAgainBtn = document.querySelector(".content button"),
        timeTag = document.querySelector(".time span b"),
        mistakeTag = document.querySelector(".mistake span"),
        wpmTag = document.querySelector(".wpm span"),
        cpmTag = document.querySelector(".cpm span");
        
        let timer,
        maxTime = 60,
        timeLeft = maxTime,
        charIndex = mistakes = isTyping = 0;
        
        function loadParagraph() {
            const ranIndex = Math.floor(Math.random() * paragraphs.length);
            typingText.innerHTML = "";
            paragraphs[ranIndex].split("").forEach(char => {
                let span = `<span>${char}</span>`
                typingText.innerHTML += span;
            });
            typingText.querySelectorAll("span")[0].classList.add("active");
            document.addEventListener("keydown", () => inpField.focus());
            typingText.addEventListener("click", () => inpField.focus());
        }
        
        function initTyping() {
            let characters = typingText.querySelectorAll("span");
            let typedChar = inpField.value.split("")[charIndex];
            if(charIndex < characters.length - 1 && timeLeft > 0) {
                if(!isTyping) {
                    timer = setInterval(initTimer, 1000);
                    isTyping = true;
                }
                if(typedChar == null) {
                    if(charIndex > 0) {
                        charIndex--;
                        if(characters[charIndex].classList.contains("incorrect")) {
                            mistakes--;
                        }
                        characters[charIndex].classList.remove("correct", "incorrect");
                    }
                } else {
                    if(characters[charIndex].innerText == typedChar) {
                        characters[charIndex].classList.add("correct");
                    } else {
                        mistakes++;
                        characters[charIndex].classList.add("incorrect");
                    }
                    charIndex++;
                }
                characters.forEach(span => span.classList.remove("active"));
                characters[charIndex].classList.add("active");
        
                let wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * 60);
                wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
                
                wpmTag.innerText = wpm;
                mistakeTag.innerText = mistakes;
                cpmTag.innerText = charIndex - mistakes;
            } else {
                clearInterval(timer);
                inpField.value = "";
            }   
        }
        
        function initTimer() {
            if(timeLeft > 0) {
                timeLeft--;
                timeTag.innerText = timeLeft;
                let wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * 60);
                wpmTag.innerText = wpm;
            } else {
                clearInterval(timer);
            }
        }
        
        function resetGame() {
            loadParagraph();
            clearInterval(timer);
            timeLeft = maxTime;
            charIndex = mistakes = isTyping = 0;
            inpField.value = "";
            timeTag.innerText = timeLeft;
            wpmTag.innerText = 0;
            mistakeTag.innerText = 0;
            cpmTag.innerText = 0;
        }
        
        loadParagraph();
        inpField.addEventListener("input", initTyping);
        tryAgainBtn.addEventListener("click", resetGame);