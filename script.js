const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSd4qm3qu9fCwm4te-1pgf8QnC7A1cd8wlxrQCk6I23pbefpdg/viewform";

const GOOGLE_ENTRY_ID = "entry.29427976";
const duas = [
    "ربي يفتحلك أبواب الخير ويرزقك راحة البال 🤍",
    "ربي يحققلك أمنياتك الجميلة ويكتبلك الخير وين ما كان 🌷",
    "اللهم اجعل أيامك القادمة أجمل مما تتمنى 🤲",
    "ربي يحفظك من كل شر ويرزقك السعادة والطمأنينة 💗",
    "ربي يرزقك فرحة تنسيك كل تعب عشته 🤍",
    "اللهم اكتب لك في كل خطوة خيرًا وبركة 🌸",
    "ربي يجعل قلبك مطمئنًا، وأيامك مليئة بالخير والسعادة 🤍",
    "اللهم ارزقك من حيث لا تحتسب، وافتح لك أبوابًا لم تكن تتوقعها 🌷"
];


// ========================================
// الأدعية الخاصة بالعائلة
// ========================================

const specialDuas = {

    tadjo: {
        names: [
            "تاجو",
            "تاج الدين",
            "Tadjo",
            "Tadj eddine"
        ],

        dua: `اخي ربي يحفظك وينور طريقك، ويفتحها عليك من أوسع أبوابه، وييسرلك كل خطوة تخطيها، ويباركلك في رزقك ومالك وعمرك. ربي يرزقك دار هانية، وسيارة مباركة، وزوجة صالحة تكونلك سكن وراحة، ويكتبلك الخير وين ما كان ويبعد عليك التعب والشر. ربي يجعل هاذ الأيام بداية خير وفرحة كبيرة في حياتك، ويحققلك كل واش تتمناه، ويفرح قلبك ويهنّيك، ويباركلك في مستقبلك وحياتك. 🤲❤️`
    },


    amine: {
        names: [
            "امين",
            "أمين",
            "Amine"
        ],

        dua: `اخي ربي يحفظك، ويباركلك في غربتك وحياتك، ويهون عليك كل تعب، ويفتحلك أبواب الخير والرزق من حيث لا تحتسب. ربي يوفقك في كل خطوة تخطيها، ويكتبلك الخير وين ما كان، ويحققلك واش في بالك.

ربي يحفظلك مرتك وبناتك عناية وأنيسة، ويجعلهم قرة عين ليك، ويباركلك فيهم ويحميهم من كل شر، ويجمعكم ديما على المحبة والهناء. 🤲❤️

ربي يرزقك راحة البال، والاستقرار، والرزق الحلال، ويبدل كل تعب بفرحة وكل انتظار ببشارة، ويفتحلك أبوابًا أجمل مما تتمنى. ربي يجعل القادم في حياتك خير وبركة وفرح، ويحققلك كل دعوة مخبيها في قلبك. ❤️🤲`
    },


    rawane: {
        names: [
            "روان",
            "Rawane",
            "Raouane"
        ],

        dua: `ختي ربي يحفظك، ويخليك ليا ويديم بيناتنا المحبة والضحكة والأيام الحلوة. 🤲❤️ ربي يفرح قلبك قد ما فرحتي قلبي، ويعطيك على قد نيتك الطيبة، ويرزقك راحة البال والسعادة والهناء، ويفتحلك كل باب فيه خير.

ربي يحميك من كل شر، ويحققلك كل واش تتمني، ويكتبلك في كل خطوة خير وبركة، ويعوضك على أي تعب فرحة، وعلى أي دعوة في قلبك استجابة. ربي يخليك ديما بخير، ويجعل حياتك أجمل مما تتمني، ويجمعلك بين الصحة والرزق والراحة والناس لي يحبوك بصدق. ❤️🤲`
    },


    oussama: {
        names: [
            "oussama",
            "Oussama",
            "اسامة",
            "أسامة"
        ],

        dua: `خويا ربي يحفظك ويستر عليك وينور طريقك، ويفتحلك أبواب الخير والرزق من حيث لا تحتسب. ربي يفرج عليك كل ضيق، ويسهل عليك أمورك، ويكتبلك الفرج والاستقرار وراحة البال، ويحققلك كل حاجة تتمناها.

ربي يعوضك على كل تعب خير، ويجعل أيامك الجاية كلها بشاير وفرح، ويجمعك بينا على خير وفي أحسن حال. ربي يحفظك من كل سوء، ويباركلك في صحتك ورزقك وعمرك، ويكتبلك مستقبل أجمل مما تتمنى. 🤲❤️`
    },


    rabia: {
        names: [
            "ربيعة"
        ],

        dua: `امي ربي يحفظك لينا ويطول في عمرك بالصحة والعافية، وما يحرمناش منك ولا من حنانك ودعواتك. 🤲❤️ ربي يجازيك على كل تعب تعبتيه علينا، وعلى كل لحظة سهرتي فيها وخفتي علينا، وعلى كل دعوة دعيتها من قلبك.

ربي يفرح قلبك كيما فرحتينا، ويهنيك ويعطيك راحة البال، ويبعد عليك كل حزن وتعب، ويرزقك الصحة والستر والهناء. ربي يحفظنا كامل ليك، ويجمعنا ديما حولك سالمين وفرحانين، ويجعل كل أيامك جاية أجمل وأخف على قلبك. ربي ما يورّيك فينا غير الخير، ويحققلك كل أمنية في قلبك، ويجعلنا سبب فرحتك وفخرك في الدنيا، ويجمعنا بيك في الجنة كما جمعنا في الدنيا. ❤️🤲`
    },


    ahmed: {
        names: [
            "ahmed",
            "Ahmed",
            "احمد",
            "أحمد"
        ],

        dua: `ابي ربي يحفظك ويطول في عمرك بالصحة والعافية، ويجزيك عنا كل خير على كل تعب تعبتو علينا وكل حاجة ضحيت بيها من أجلنا. 🤲❤️

ربي يعطيك راحة البال ويفرح قلبك، ويباركلك في صحتك ورزقك وعمرك، ويفتحلك أبواب الخير والبركة، ويبعد عليك كل هم وتعب. ربي ما يورّيك فينا غير الخير، ويجعلنا ديما سبب فرحتك وفخرك، ويحفظك لينا ويجمعنا ديما على الخير والمحبة والهناء. ❤️

ربي يحققلك كل واش تتمناه، ويعطيك من الخير حتى ترضى، ويجعل كل أيامك راحة وطمأنينة، ويجازيك عنا خير الجزاء. 🤲❤️`
    }

};


// ========================================
// عناصر الصفحة
// ========================================

const nameInput = document.getElementById("nameInput");

const duaButton = document.getElementById("duaButton");

const envelope = document.getElementById("envelope");

const duaText = document.getElementById("duaText");
const hearts = document.getElementById("hearts");
function createHearts() {

    hearts.innerHTML = "";

    const symbols = ["💗", "🤍", "🌷", "✨", "💕"];

    for (let i = 0; i < 18; i++) {

        const heart = document.createElement("span");

        heart.classList.add("floating-heart");

        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left =
            Math.random() * 90 + 5 + "%";

        heart.style.animationDelay =
            Math.random() * 0.7 + "s";

        hearts.appendChild(heart);
    }

    setTimeout(function () {

        hearts.innerHTML = "";

    }, 3500);
}

// ========================================
// تنظيف الاسم
// ========================================

function normalizeName(name) {

    return name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");

}


// ========================================
// البحث عن دعاء خاص
// ========================================

function getSpecialDua(name) {

    const normalizedName = normalizeName(name);

    for (const person of Object.values(specialDuas)) {

        const found = person.names.some(function (possibleName) {

            return normalizeName(possibleName) === normalizedName;

        });

        if (found) {

            return person.dua;

        }

    }

    return null;

}


// ========================================
// زر الحصول على الدعاء
// ========================================

duaButton.addEventListener("click", function () {

 const name = nameInput.value.trim();

saveName(name);

if (name === "") {

        alert("Please write your name first 🌷");

        return;

    }


    // نشوفو إذا عندو دعاء خاص
    let selectedDua = getSpecialDua(name);


    // إذا ما عندوش، نعطيوه دعاء عشوائي
    if (selectedDua === null) {

        const randomIndex =
            Math.floor(Math.random() * duas.length);

        selectedDua = duas[randomIndex];

    }


    // نحطو الدعاء داخل الرسالة
   duaText.innerHTML = `
    <strong class="greeting">Dear ${name}, 🤍</strong>
    <span class="dua-content">${selectedDua}</span>
`;


    // نظهرو الظرف
    envelope.classList.remove("hidden");

    // نسكروه قبل ما نعاودو نفتحو
    envelope.classList.remove("open");


    // نعطيو وقت صغير قبل الفتح
   setTimeout(function () {

    envelope.classList.add("open");

    createHearts();

}, 300);

});
function saveName(name) {

    const formData = new FormData();

    formData.append(GOOGLE_ENTRY_ID, name);

    fetch(
        GOOGLE_FORM_URL.replace("/viewform", "/formResponse"),
        {
            method: "POST",
            body: formData,
            mode: "no-cors"
        }
    ).catch(function(error) {

        console.log("Name could not be saved:", error);

    });

}