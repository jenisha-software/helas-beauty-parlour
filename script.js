/* =====================================================
   HELA'S BEAUTY PARLOUR & ACADEMY
   MAIN JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===================================================
     MOBILE MENU
  =================================================== */

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");

      if (navLinks.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
      } else {
        menuToggle.innerHTML = "☰";
      }
    });

    /* Close menu after clicking a link */

    const links = navLinks.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = "☰";
      });
    });
  }


  /* ===================================================
     SMOOTH SCROLL
  =================================================== */

  const allLinks = document.querySelectorAll('a[href^="#"]');

  allLinks.forEach((link) => {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });

  });


  /* ===================================================
     APPOINTMENT BUTTONS
  =================================================== */

  const appointmentButtons = document.querySelectorAll(
    'a[href="#contact"], .appointment-btn'
  );

  appointmentButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const contactSection = document.querySelector("#contact");

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth"
        });
      }

    });

  });


  /* ===================================================
     FOOTER YEAR
  =================================================== */

  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  /* ===================================================
     SCROLL HEADER EFFECT
  =================================================== */

  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  });


  /* ===================================================
     REVEAL ANIMATION
  =================================================== */

  const revealElements = document.querySelectorAll(
    ".service-card, .fee-card, .academy-card, .social-card, .contact-card, .gallery-item"
  );

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });

});
// =========================================
// HAIR GALLERY
// =========================================

function openHairGallery() {

    const hairGallery = document.getElementById("hairGallery");

    if (hairGallery) {
        hairGallery.classList.add("active");
    }

}


function closeHairGallery() {

    const hairGallery = document.getElementById("hairGallery");

    if (hairGallery) {
        hairGallery.classList.remove("active");
    }

}
// =========================================
// NAIL ART GALLERY
// =========================================

function openNailGallery() {

    const nailGallery =
        document.getElementById("nailGallery");

    if (nailGallery) {
        nailGallery.classList.add("active");
    }

}

function closeNailGallery() {

    const nailGallery =
        document.getElementById("nailGallery");

    if (nailGallery) {
        nailGallery.classList.remove("active");
    }

}
// =========================================
// BRIDAL GALLERY
// =========================================

function openBridalGallery() {

    const bridalGallery =
        document.getElementById("bridalGallery");

    if (bridalGallery) {
        bridalGallery.classList.add("active");
    }

}

function closeBridalGallery() {

    const bridalGallery =
        document.getElementById("bridalGallery");

    if (bridalGallery) {
        bridalGallery.classList.remove("active");
    }

}
// =========================================
// TATTOO GALLERY
// =========================================

function openTattooGallery() {

    const tattooGallery =
        document.getElementById("tattooGallery");

    if (tattooGallery) {
        tattooGallery.classList.add("active");
    }

}

function closeTattooGallery() {

    const tattooGallery =
        document.getElementById("tattooGallery");

    if (tattooGallery) {
        tattooGallery.classList.remove("active");
    }

}
// =========================================
// EYEBROW & LASHES GALLERY
// =========================================

function openEyeGallery() {

    const eyeGallery =
        document.getElementById("eyeGallery");

    if (eyeGallery) {
        eyeGallery.classList.add("active");
    }

}

function closeEyeGallery() {

    const eyeGallery =
        document.getElementById("eyeGallery");

    if (eyeGallery) {
        eyeGallery.classList.remove("active");
    }

}
function openMehandiGallery() {
    const mehandiGallery = document.getElementById("mehandiGallery");

    if (mehandiGallery) {
        mehandiGallery.classList.add("active");
    }
}

function closeMehandiGallery() {
    const mehandiGallery = document.getElementById("mehandiGallery");

    if (mehandiGallery) {
        mehandiGallery.classList.remove("active");
    }
}
// =========================================
// HAIR SERVICES PANEL
// =========================================

function openHairServices() {
    const panel = document.getElementById("hairServicesPanel");

    if (panel) {
        panel.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeHairServices() {
    const panel = document.getElementById("hairServicesPanel");

    if (panel) {
        panel.classList.remove("active");
        document.body.style.overflow = "";
    }
}


// =========================================
// HAIR CATEGORY SWITCHING
// =========================================

function showHairCategory(categoryId, button) {

    const categories = document.querySelectorAll(
        ".hair-category-content"
    );

    categories.forEach(function(category) {
        category.classList.remove("active");
    });

    const selectedCategory =
        document.getElementById(categoryId);

    if (selectedCategory) {
        selectedCategory.classList.add("active");
    }


    const buttons = document.querySelectorAll(
        ".hair-category-btn"
    );

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }
}


// =========================================
// ESC KEY TO CLOSE
// =========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeHairServices();
    }

});
// =========================================
// SKIN & FACIAL SERVICES PANEL
// =========================================

function openSkinServices() {
    const panel = document.getElementById("skinServicesPanel");

    if (panel) {
        panel.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeSkinServices() {
    const panel = document.getElementById("skinServicesPanel");

    if (panel) {
        panel.classList.remove("active");
        document.body.style.overflow = "";
    }
}


// =========================================
// SKIN CATEGORY SWITCHING
// =========================================

function showSkinCategory(categoryId, button) {

    const categories = document.querySelectorAll(
        ".skin-category-content"
    );

    categories.forEach(function(category) {
        category.classList.remove("active");
    });

    const selectedCategory =
        document.getElementById(categoryId);

    if (selectedCategory) {
        selectedCategory.classList.add("active");
    }


    const buttons = document.querySelectorAll(
        ".skin-category-btn"
    );

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }
}


// =========================================
// SKIN & FACIAL SERVICES PANEL
// =========================================

function openSkinServices() {
    const panel = document.getElementById("skinServicesPanel");

    if (panel) {
        panel.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeSkinServices() {
    const panel = document.getElementById("skinServicesPanel");

    if (panel) {
        panel.classList.remove("active");
        document.body.style.overflow = "";
    }
}


// =========================================
// SKIN CATEGORY SWITCHING
// =========================================

function showSkinCategory(categoryId, button) {

    const categories = document.querySelectorAll(
        ".skin-category-content"
    );

    categories.forEach(function(category) {
        category.classList.remove("active");
    });

    const selectedCategory =
        document.getElementById(categoryId);

    if (selectedCategory) {
        selectedCategory.classList.add("active");
    }


    const buttons = document.querySelectorAll(
        ".skin-category-btn"
    );

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }
}


// =========================================
// ESC KEY
// =========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeSkinServices();
    }

});
// =========================================
// MAKEUP SERVICES PANEL
// =========================================

function openMakeupServices() {
    const panel = document.getElementById("makeupServicesPanel");

    if (panel) {
        panel.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeMakeupServices() {
    const panel = document.getElementById("makeupServicesPanel");

    if (panel) {
        panel.classList.remove("active");
        document.body.style.overflow = "";
    }
}


// =========================================
// MAKEUP CATEGORY SWITCHING
// =========================================

function showMakeupCategory(categoryId, button) {

    const categories = document.querySelectorAll(
        ".makeup-category-content"
    );

    categories.forEach(function(category) {
        category.classList.remove("active");
    });

    const selectedCategory =
        document.getElementById(categoryId);

    if (selectedCategory) {
        selectedCategory.classList.add("active");
    }


    const buttons = document.querySelectorAll(
        ".makeup-category-btn"
    );

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }
}


// =========================================
// ESC KEY
// =========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeMakeupServices();
    }

});
// =========================================
// NAIL ART SERVICES PANEL
// =========================================

function openNailServices() {
    const panel = document.getElementById("nailServicesPanel");

    if (panel) {
        panel.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeNailServices() {
    const panel = document.getElementById("nailServicesPanel");

    if (panel) {
        panel.classList.remove("active");
        document.body.style.overflow = "";
    }
}


// =========================================
// NAIL CATEGORY SWITCHING
// =========================================

function showNailCategory(categoryId, button) {

    const categories = document.querySelectorAll(
        ".nail-category-content"
    );

    categories.forEach(function(category) {
        category.classList.remove("active");
    });

    const selectedCategory =
        document.getElementById(categoryId);

    if (selectedCategory) {
        selectedCategory.classList.add("active");
    }

    const buttons = document.querySelectorAll(
        ".nail-category-btn"
    );

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }
}


// =========================================
// ESC KEY
// =========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeNailServices();
    }

});
// =========================================
// TATTOO SERVICES PANEL
// =========================================

function openTattooServices() {

    const panel =
        document.getElementById("tattooServicesPanel");

    if (panel) {

        panel.classList.add("active");

        document.body.style.overflow = "hidden";
    }
}


// =========================================
// CLOSE TATTOO SERVICES
// =========================================

function closeTattooServices() {

    const panel =
        document.getElementById("tattooServicesPanel");

    if (panel) {

        panel.classList.remove("active");

        document.body.style.overflow = "";
    }
}


// =========================================
// TATTOO CATEGORY SWITCHING
// =========================================

function showTattooCategory(categoryId, button) {

    const categories =
        document.querySelectorAll(
            ".tattoo-category-content"
        );

    categories.forEach(function(category) {

        category.classList.remove("active");

    });


    const selectedCategory =
        document.getElementById(categoryId);

    if (selectedCategory) {

        selectedCategory.classList.add("active");

    }


    const buttons =
        document.querySelectorAll(
            ".tattoo-category-btn"
        );

    buttons.forEach(function(btn) {

        btn.classList.remove("active");

    });


    if (button) {

        button.classList.add("active");

    }

}


// =========================================
// ESC KEY TO CLOSE
// =========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeTattooServices();

    }

});
// =========================================
// PMU & AESTHETIC SERVICES PANEL
// =========================================

function openPmuServices() {

    const panel =
        document.getElementById("pmuServicesPanel");

    if (panel) {

        panel.classList.add("active");

        document.body.style.overflow = "hidden";
    }
}


// =========================================
// CLOSE PMU SERVICES
// =========================================

function closePmuServices() {

    const panel =
        document.getElementById("pmuServicesPanel");

    if (panel) {

        panel.classList.remove("active");

        document.body.style.overflow = "";
    }
}


// =========================================
// PMU CATEGORY SWITCHING
// =========================================

function showPmuCategory(categoryId, button) {

    const categories =
        document.querySelectorAll(
            ".pmu-category-content"
        );

    categories.forEach(function(category) {

        category.classList.remove("active");

    });


    const selectedCategory =
        document.getElementById(categoryId);

    if (selectedCategory) {

        selectedCategory.classList.add("active");

    }


    const buttons =
        document.querySelectorAll(
            ".pmu-category-btn"
        );

    buttons.forEach(function(btn) {

        btn.classList.remove("active");

    });


    if (button) {

        button.classList.add("active");

    }

}


// =========================================
// ESC KEY TO CLOSE
// =========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePmuServices();

    }

});
/* =========================================================
   HELA'S ACADEMY
   COURSE MODAL + CATEGORY DETAILS
========================================================= */


/* =========================================================
   OPEN COURSE
========================================================= */

function openAcademyCourse(courseId) {

    const modal = document.getElementById("academyModal");

    if (!modal) {
        console.log("Academy modal not found");
        return;
    }


    /* Hide all course contents */

    const courseContents =
        document.querySelectorAll(".academy-modal-content");

    courseContents.forEach(function (content) {
        content.classList.remove("active");
    });


    /* Hide all category details */

    const detailPanels =
        document.querySelectorAll(".academy-category-detail");

    detailPanels.forEach(function (panel) {
        panel.classList.remove("active");
    });


    /* Find selected course */

    const selectedCourse =
        document.getElementById("modal-" + courseId);

    if (!selectedCourse) {
        console.log(
            "Academy course not found: modal-" + courseId
        );
        return;
    }


    /* Show selected course */

    selectedCourse.classList.add("active");

    modal.classList.add("active");


    /* Prevent background scrolling */

    document.body.style.overflow = "hidden";
}


/* =========================================================
   CLOSE COURSE
========================================================= */

function closeAcademyCourse() {

    const modal =
        document.getElementById("academyModal");

    if (!modal) {
        return;
    }


    modal.classList.remove("active");


    /* Hide category details */

    const detailPanels =
        document.querySelectorAll(".academy-category-detail");

    detailPanels.forEach(function (panel) {
        panel.classList.remove("active");
    });


    /* Restore page scrolling */

    document.body.style.overflow = "";
}


/* =========================================================
   ACADEMY COURSE DATA
========================================================= */

const academyCategoryData = {


    /* =====================================
       BASIC DIPLOMA
    ===================================== */

    bleach: {

        label: "BLEACH",

        title: "Professional Bleach Techniques",

        items: [
            "German Bleach",
            "Cream Bleach",
            "Powder Bleach",
            "Mild Bleach",
            "Lacto Bleach",
            "Tan Removal Bleach",
            "Aroma Bleach"
        ]

    },


    skin: {

        label: "FACIAL",

        title: "Professional Skin & Facial Skills",

        items: [
            "Fruit Facial",
            "Fresh Fruit Facial",
            "Fresh Veg Facial",
            "Veg Facial",
            "Summer Facial",
            "Banana Facial",
            "Mango Facial",
            "Papaya Facial",
            "Chocolate Facial",
            "Pearl Facial",
            "Silver Facial",
            "Platinum Facial",
            "Diamond Facial",
            "Sea Magic Facial",
            "Glycolic Facial",
            "Thermosonic Facial",
            "Oxygen Facial",
            "O2+ Facial",
            "O3+ Facial",
            "Lotus Professional Facial",
            "Lotus Preservita Facial",
            "Anti Pigmentation Treatment",
            "Hydra Facial"
        ]

    },


    hair: {

        label: "HAIR",

        title: "Professional Hair Skills",

        items: [
            "Hair Fall Treatment",
            "Henna Hair Conditioning",
            "Hair Colouring",
            "Hair Falling Spa",
            "Hair Dandruff Spa",
            "Dry Damage & Breakage Hair Spa",
            "Hair Straightening & Breakage Hair Spa",
            "Hair Straightening & Smoothening Spa",
            "Hair Highlights",
            "Hair Botox Treatment"
        ]

    },


    haircut: {

        label: "HAIR CUT",

        title: "Professional Hair Cutting Skills",

        items: [
            "Hair Cuts - Face Shapes",
            "One Length",
            "One Length Rounded",
            "45° Graduation",
            "60° Graduation",
            "90° Graduation",
            "Pie / Pivoting Layer",
            "Square Layer",
            "Round / Uniform Layer",
            "French Cut",
            "Front Long Layer",
            "Baby Hair Cut",
            "Hair Cut Blow Setting"
        ]

    },


    extension: {

        label: "HAIR EXTENSION",

        title: "Professional Hair Extension Skills",

        items: [
            "Permanent Hair Extension",
            "Micro Extension",
            "Nano Extension",
            "Keratin Extension",
            "6D Extension",
            "Clip Extension",
            "Temporary Hair Extension"
        ]

    },


    bridalhair: {

        label: "BRIDAL HAIR STYLES",

        title: "Professional Bridal Hair Styling",

        items: [
            "Hair Ironing",
            "Hair Split Theory",
            "Hair Crimping",
            "Hair Curling",
            "Hair Front Puff",
            "Back Puff",
            "Messy Bun",
            "Four Stand Hair Style",
            "Lines Creating",
            "Muhurtam Hairstyle",
            "Reception Hairstyle",
            "Bridesmaid Hairstyle"
        ]

    },


    makeup: {

        label: "MAKEUP",

        title: "Professional Makeup Skills",

        items: [
            "Product Knowledge",
            "Vendor Knowledge",
            "Brushes Knowledge",
            "Kryolan Makeup",
            "Colour Shades Theory"
        ]

    },


    /* =====================================
       ADVANCED DIPLOMA
    ===================================== */

    tattoo: {

        label: "TATTOOS",

        title: "Professional Tattoo Skills",

        items: [
            "Name Tattoos",
            "Flower Tattoos",
            "Feather Tattoos",
            "Stencil Training",
            "Stencil Placement"
        ]

    },


    nail: {

        label: "NAIL ART",

        title: "Professional Nail Art Skills",

        items: [
            "Nail Shapes",
            "Nail Tools",
            "Nail Extension",
            "Ombre Techniques",
            "Gel Extension",
            "Frozen Nail",
            "Acrylic Nail"
        ]

    },


    pmu: {

        label: "PMU & AESTHETIC",

        title: "Advanced PMU & Aesthetic Skills",

        items: [
            "Permanent Eyelashes",
            "Warts Removal",
            "Microblading",
            "Lip Tattoos",
            "Ear Lobe Treatment",
            "Lip Liner",
            "Ear Piercing",
            "Eyebrow Tinting",
            "1D, 2D & 3D Lashes",
            "Chemical Peels",
            "Heel Peel Treatment",
            "Permanent Hair Removal"
        ]

    }

};


/* =========================================================
   SHOW CATEGORY DETAILS
========================================================= */

function showAcademyCategory(category) {

    const data =
        academyCategoryData[category];


    if (!data) {

        console.log(
            "Academy category not found: " + category
        );

        return;
    }


    /* Check which course is currently open */

    const activeCourse =
        document.querySelector(
            ".academy-modal-content.active"
        );


    if (!activeCourse) {

        console.log(
            "No Academy course is currently active"
        );

        return;
    }


    let panel;
    let label;
    let title;
    let list;


    /* =====================================
       BASIC DIPLOMA
    ===================================== */

    if (
        activeCourse.id ===
        "modal-diploma-course"
    ) {

        panel =
            document.getElementById(
                "academyCategoryDetail"
            );

        label =
            document.getElementById(
                "academyDetailLabel"
            );

        title =
            document.getElementById(
                "academyDetailTitle"
            );

        list =
            document.getElementById(
                "academyDetailList"
            );

    }


    /* =====================================
       ADVANCED DIPLOMA
    ===================================== */

    else if (
        activeCourse.id ===
        "modal-advanced-course"
    ) {

        panel =
            document.getElementById(
                "academyCategoryDetailAdvanced"
            );

        label =
            document.getElementById(
                "academyDetailLabelAdvanced"
            );

        title =
            document.getElementById(
                "academyDetailTitleAdvanced"
            );

        list =
            document.getElementById(
                "academyDetailListAdvanced"
            );

    }


    /* Safety check */

    if (
        !panel ||
        !label ||
        !title ||
        !list
    ) {

        console.log(
            "Academy category detail elements not found"
        );

        return;
    }


    /* Set category title */

    label.textContent =
        data.label;

    title.textContent =
        data.title;


    /* Clear old list */

    list.innerHTML = "";


    /* Create new list */

    data.items.forEach(function (item) {

        const li =
            document.createElement("li");

        li.textContent =
            item;

        list.appendChild(li);

    });


    /* Show details */

    panel.classList.add("active");
}


/* =========================================================
   CLOSE CATEGORY DETAILS
========================================================= */

function closeAcademyCategory() {

    const panels =
        document.querySelectorAll(
            ".academy-category-detail"
        );


    panels.forEach(function (panel) {

        panel.classList.remove("active");

    });
}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {
            return;
        }


        const modal =
            document.getElementById(
                "academyModal"
            );


        if (
            modal &&
            modal.classList.contains("active")
        ) {

            closeAcademyCourse();

        }

    }
);
/* =========================================
   MOBILE NAVIGATION
========================================= */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mainNavbar = document.getElementById("mainNavbar");

if (mobileMenuBtn && mainNavbar) {

    mobileMenuBtn.addEventListener("click", function () {

        mainNavbar.classList.toggle("mobile-open");

        mobileMenuBtn.classList.toggle("active");

        const isOpen =
            mainNavbar.classList.contains("mobile-open");

        mobileMenuBtn.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Close menu after clicking a link */

    const mobileNavLinks =
        mainNavbar.querySelectorAll("a");

    mobileNavLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNavbar.classList.remove("mobile-open");

            mobileMenuBtn.classList.remove("active");

            mobileMenuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}
/* =========================
   APPOINTMENT FORM
   WHATSAPP CONNECTION
========================= */

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get customer details
        const name = document.getElementById("appointmentName").value.trim();
        const phone = document.getElementById("appointmentPhone").value.trim();
        const service = document.getElementById("appointmentService").value;
        const date = document.getElementById("appointmentDate").value;
        const time = document.getElementById("appointmentTime").value;
        const message = document.getElementById("appointmentMessage").value.trim();


        // Convert date to readable format
        let formattedDate = date;

        if (date) {

            const selectedDate = new Date(date + "T00:00:00");

            formattedDate = selectedDate.toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "long",
                year: "numeric"
            });

        }


        // Convert time to 12-hour format
        let formattedTime = time;

        if (time) {

            const [hours, minutes] = time.split(":");

            const hourNumber = parseInt(hours, 10);

            const period = hourNumber >= 12 ? "PM" : "AM";

            const displayHour =
                hourNumber % 12 === 0
                    ? 12
                    : hourNumber % 12;

            formattedTime =
                `${displayHour}:${minutes} ${period}`;

        }


        // Create WhatsApp message
        const whatsappMessage =
`Hello HELA'S Beauty Parlour & Academy,

I would like to book an appointment.

Name: ${name}
Phone / WhatsApp: ${phone}
Service: ${service}
Preferred Date: ${formattedDate}
Preferred Time: ${formattedTime}

Special Request:
${message || "No special request"}

Thank you.`;


        // WhatsApp number
        const whatsappNumber = "+919789422400";


        // Create WhatsApp URL
        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        // Open WhatsApp
        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    });

}
/* =========================
   SERVICE → APPOINTMENT FORM
========================= */

const serviceLinks = document.querySelectorAll(
    'a[href="#appointmentForm"]'
);

serviceLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const linkText = link.textContent.trim().toLowerCase();

        const serviceSelect =
            document.getElementById("appointmentService");

        if (!serviceSelect) return;


        if (linkText.includes("bridal")) {
            serviceSelect.value = "Bridal";
        }
        else if (linkText.includes("hair")) {
            serviceSelect.value = "Hair";
        }
        else if (linkText.includes("makeup")) {
            serviceSelect.value = "Makeup";
        }
        else if (linkText.includes("nail")) {
            serviceSelect.value = "Nail Art";
        }
        else if (linkText.includes("tattoo")) {
            serviceSelect.value = "Tattoo";
        }
        else if (linkText.includes("pmu") ||
                 linkText.includes("aesthetic")) {
            serviceSelect.value = "PMU & Aesthetic";
        }
        else if (linkText.includes("skin") ||
                 linkText.includes("facial")) {
            serviceSelect.value = "Skin & Facial";
        }

    });

});