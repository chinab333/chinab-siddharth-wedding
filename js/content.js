/* All invitation wording lives here. Facts come from the family's invitation PDF; change them in one place. */
window.WEDDING = {
  config: {
    defaultLang: 'hi',
    phone: '+919079638720',
    phoneDisplay: '+91 9079638720',
    // Add a URL to also POST RSVPs as JSON ({name, choice, guests, lang}). Guests always send their reply by WhatsApp.
    rsvpEndpoint: null,
    maps: {
      wedding: 'https://www.google.com/maps/search/?api=1&query=Milan+Resort+Kota+Rajasthan'
    }
  },
  hi: {
    meta: { title: 'चिनाब एवं सिद्धार्थ | शुभ विवाह' },
    nav: { home: 'होम', wedding: 'विवाह', rsvp: 'RSVP', menu: 'मेनू', close: 'बंद करें' }, 
    opening: { blessing: 'शुभ विवाह', bride: 'चिनाब', and: 'एवं', groom: 'सिद्धार्थ', hint: 'ऊपर स्क्रॉल करें' },
    fort: { invocation: '॥ श्री गणेशाय नमः ॥' },
    sound: { label: 'संगीत चालू या बंद करें' },
    announce: {
      lead: 'दोनों परिवारों के आशीर्वाद के साथ',
      bride: 'चिनाब', and: 'एवं', groom: 'सिद्धार्थ',
      message: 'अपने जीवन के इस मंगल अवसर पर आपको सादर आमंत्रित करते हैं। आपकी उपस्थिति और स्नेह से यह दिन और भी शुभ हो जाएगा।'
    },
    events: {
      days: [
        { day: '17', monthYear: 'जनवरी 2027', weekday: 'रविवार', items: [{ name: 'विनायक स्थापना' }, { name: 'डीजे नाइट' }] },
        { day: '18', monthYear: 'जनवरी 2027', weekday: 'सोमवार', items: [{ name: 'हल्दी' }, { name: 'विवाह' }] }
      ],
      venueLabel: 'स्थान', venue: 'मिलन रिज़ॉर्ट', place: 'कोटा, राजस्थान', directions: 'नक्शे पर देखें'
    },
    families: {
      heading: 'दो घर, एक उत्सव',
      bride: { name: 'चिनाब', parents: ' ' },
      groom: { name: 'सिद्धार्थ', parents: ' ' }
    },
    rsvp: {
      heading: 'आपकी उपस्थिति हमारे इस विशेष दिन को और भी सुंदर बना देगी', label: 'RSVP', contact: 'संपर्क', cta: 'उपस्थिति की पुष्टि करें',
      lampPrompt: 'दीया जलाएँ', lampLabel: 'दीया जलाएँ',
      optYes: 'आएँगे', optNo: 'नहीं आएँगे',
      guestsLabel: 'कितने व्यक्ति', guestsDec: 'एक व्यक्ति कम करें', guestsInc: 'एक व्यक्ति बढ़ाएँ',
      nameLabel: 'आपका नाम (वैकल्पिक)', whatsapp: 'WhatsApp पर उत्तर भेजें',
      msgYes: 'नमस्ते! निमंत्रण के लिए धन्यवाद। हम {n} व्यक्ति आएँगे।',
      msgNo: 'नमस्ते! निमंत्रण के लिए धन्यवाद। क्षमा करें, हम नहीं आ पाएँगे, पर हमारा आशीर्वाद आपके साथ है।',
      msgName: '— {name}'
    },
    calm: { lake: 'झील के किनारे, सूर्यास्त में रेलिंग पर खड़े दूल्हा और दुल्हन', fort: 'सूर्यास्त में झील और पहाड़ियों के बीच राजस्थानी किला' }
  },
  en: {
    meta: { title: 'Chinab & Siddharth | Wedding Invitation' },
    nav: { home: 'Home', wedding: 'Wedding', rsvp: 'RSVP', menu: 'Menu', close: 'Close' },
    opening: { blessing: 'The auspicious wedding of', bride: 'Chinab', and: '&', groom: 'Siddharth', hint: 'Scroll up' },
    fort: { invocation: 'Om Shree Ganeshay Namah' },
    sound: { label: 'Turn music on or off' },
    announce: {
      lead: 'Together with their families',
      bride: 'Chinab', and: '&', groom: 'Siddharth',
      message: 'cordially invite you to join their wedding celebrations on'
    },
    events: {
      days: [
        { day: '17', monthYear: 'January 2027', weekday: 'Sunday', items: [{ name: 'Vinayak Sthapna' }, { name: 'DJ Night' }] },
        { day: '18', monthYear: 'January 2027', weekday: 'Monday', items: [{ name: 'Haldi' }, { name: 'Shadi' }] }
      ],
      venueLabel: 'Venue', venue: 'Milan Resort', place: 'Kota, Rajasthan', directions: 'View on map'
    },
    families: {
      heading: 'Two homes, one celebration',
      bride: { name: 'Chinab', parents: ' ' },
      groom: { name: 'Siddharth', parents: ' ' }
    },
    rsvp: {
      heading: 'Your presence would mean so much to us', label: 'RSVP', contact: 'Contact', cta: 'Confirm your attendance',
      lampPrompt: 'Light the diya', lampLabel: 'Light the diya',
      optYes: 'Will come', optNo: 'Won’t come',
      guestsLabel: 'Number of guests', guestsDec: 'One guest fewer', guestsInc: 'One guest more',
      nameLabel: 'Your name (optional)', whatsapp: 'Reply on WhatsApp',
      msgYes: 'Hello! Thank you for the invitation. We will come: {n} guest(s).',
      msgNo: 'Hello! Thank you for the invitation. Sadly we can’t make it, but our blessings are with you.',
      msgName: '— {name}'
    },
    calm: { lake: 'The bride and groom at a railing by the lake at sunset', fort: 'A Rajasthani fort between lake and hills at sunset' }
  }
};
