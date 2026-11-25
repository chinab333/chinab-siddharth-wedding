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
    nav: { home: 'होम', wedding: 'विवाह', rituals: 'रस्में', rsvp: 'RSVP', menu: 'मेनू', close: 'बंद करें' }, 
    opening: { blessing: 'शुभ विवाह', bride: 'चिनाब', and: 'एवं', groom: 'सिद्धार्थ', hint: 'ऊपर स्क्रॉल करें' },
    fort: { invocation: '॥ श्री गणेशाय नमः ॥' },
    sound: { label: 'संगीत चालू या बंद करें' },
    cover: { tap: 'खोलने के लिए टैप करें' },
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
    rituals: {
      heading: 'विवाह संस्कार',
      intro: 'परंपराओं के पावन संगम में, अनंत प्रेम का शुभारंभ।',
      nudge: 'आगे बढ़ते रहें',
      items: [
        { n: '१', title: 'विनायक स्थापना', text: 'शुभारंभ और विघ्नों के निवारण के लिए भगवान गणेश का आह्वान।', alt: 'चौकी पर विराजमान भगवान गणेश, सामने दीये, कलश और लड्डू' },
        { n: '२', title: 'बारात स्वागत ', text: 'दूल्हे और उसकी बारात के विवाह स्थल पर पहुँचने पर दुल्हन पक्ष द्वारा पारंपरिक स्वागत किया जाता है।', alt: 'दूल्हा और दुल्हन गेंदे की माला उठाए आमने-सामने' },
        { n: '३', title: 'वरमाला', text: 'दूल्हा और दुल्हन एक-दूसरे को वरमाला पहनाकर अपने जीवनसाथी के रूप में स्वीकार करते हैं।', alt: 'दूल्हा और दुल्हन गेंदे की माला उठाए आमने-सामने' },
        { n: '४', title: 'कन्यादान', text: 'परिवार द्वारा कन्या को प्रेम और आशीर्वाद के साथ वर को सौंपने की पारंपरिक रस्म।', alt: 'लोटे से जल की धारा, वर और वधू के हाथों पर, नीचे परिवार के हाथ' },
        { n: '५', title: 'पाणिग्रहण', text: 'वर द्वारा वधू का हाथ स्वीकार करना और जीवनभर साथ निभाने का संकल्प।', alt: 'मेहंदी रचा वधू का हाथ वर के हाथ में' },
        { n: '६', title: 'सप्तपदी एवं अग्नि फेरे', text: 'पवित्र अग्नि को साक्षी मानकर दोनों सात फेरे लेते हैं।', alt: 'तारों भरी रात में वेदी की अग्नि और गठबंधन में बँधे वर-वधू' },
        // { n: '६', title: 'सप्तपदी', text: 'साथ मिलकर सात कदम और सात जीवन-संकल्प।', alt: 'बावड़ी के जल में सात कमल, हर एक पर महावर लगे चरण' },
        { n: '७', title: 'सिंदूर एवं मंगलसूत्र', text: 'विवाह के पारंपरिक प्रतीकों के माध्यम से वैवाहिक बंधन की पूर्णता।', alt: 'सिंदूरदानी और काले मोतियों का मंगलसूत्र' },
        { n: '८', title: 'आशीर्वाद', text: 'परिवार और प्रियजनों से नवविवाहित जोड़े के लिए आशीर्वाद।', alt: 'बुज़ुर्ग हाथ उठाकर आशीर्वाद देते हुए, ऊपर से गिरती पंखुड़ियाँ' }
      ]
    },
    route: { line: 'और कहानी आगे बढ़ती है, नर्मदा की नगरी की ओर।', from: 'कोटा', to: 'जबलपुर', river: 'नर्मदा' },
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
    nav: { home: 'Home', wedding: 'Wedding', rituals: 'Rituals', rsvp: 'RSVP', menu: 'Menu', close: 'Close' },
    opening: { blessing: 'The auspicious wedding of', bride: 'Chinab', and: '&', groom: 'Siddharth', hint: 'Scroll up' },
    fort: { invocation: 'Om Shree Ganeshay Namah' },
    sound: { label: 'Turn music on or off' },
    cover: { tap: 'Tap to open' },
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
    rituals: {
      heading: 'The Wedding Rituals',
      intro: 'Where time-honored traditions meet the promise of forever.',
      nudge: 'Keep walking',
      items: [
        { n: '1', title: 'Vinayak Sthapna', text: 'An invocation of Lord Ganesha, for an auspicious beginning and the removal of obstacles.', alt: 'Lord Ganesha seated on a low altar with lamps, kalash and laddoos before him' },
        { n: '2', title: 'Barat Swagat', text: 'When the groom and his baraat arrive at the wedding venue, a traditional welcome is given by the bride’s side.', alt: 'Groom welcome' },
        { n: '3', title: 'Varmala', text: 'The bride and groom garland each other, accepting one another as life partners.', alt: 'Bride and groom face each other, lifting a marigold garland' },
        { n: '4', title: 'Kanyadaan', text: 'The traditional rite in which the family entrusts the bride to the groom, with love and blessings.', alt: 'Water pours from a brass lota over the couple’s hands, with the family’s hands beneath' },
        { n: '5', title: 'Panigrahan', text: 'The groom accepts the bride’s hand, with a vow to stand together for life.', alt: 'The bride’s hennaed hand rests in the groom’s' },
        { n: '6', title: 'Saptapadi & Agni Pheras', text: 'With the sacred fire as witness, the couple walk the seven rounds.', alt: 'A sacred fire under a starry sky, the couple joined by a knotted cloth' },
        // { n: '6', title: 'Saptapadi', text: 'Seven steps together, and seven promises for life.', alt: 'Seven lotuses across a stepwell’s water, each marked with alta footprints' },
        { n: '7', title: 'Sindoor & Mangalsutra', text: 'The marriage bond is completed through its traditional symbols.', alt: 'A brass sindoor box beside a black-beaded mangalsutra' },
        { n: '8', title: 'Aashirwad', text: 'Blessings from family and loved ones for the newlywed couple.', alt: 'Elders raise their hands in blessing as petals fall over the couple' }
      ]
    },
    route: { line: 'And the story travels on, to the city of the Narmada.', from: 'Kota', to: 'Jabalpur', river: 'Narmada' },
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
