/**
 * SEVEN WONDERS OF THE WORLD - INTERACTIVE CARTOGRAPHY & EDUCATIONAL ARCHIVE
 * Pure Vanilla JavaScript + Leaflet.js
 */

(function () {
  'use strict';

  /* ==========================================================================
     DATABASE: NEW 7 WONDERS & ANCIENT WONDERS
     ========================================================================== */
  const WONDERS_DATA = {
    new: [
      {
        id: 'great-wall',
        name: 'Great Wall of China',
        nativeName: '万里长城 (Wànlǐ Chángchéng)',
        country: 'China',
        flag: '🇨🇳',
        coords: [40.4319, 116.5704],
        year: '700 BC – 1644 AD',
        era: 'Ming Dynasty Peak',
        category: 'Fortification Architecture',
        thumbnail: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80',
        heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1600&q=85',
        stats: {
          length: '21,196 km (13,171 miles)',
          height: '5 to 8 meters (16–26 ft)',
          builder: 'Emperor Qin Shi Huang & Ming Rulers',
          visitors: '~10M per year'
        },
        overview: `Stretching across northern China from Shanhaiguan on the Bohai Sea to Jiayuguan in the Gobi Desert, the Great Wall represents the largest human architectural endeavor in recorded history. Built across multiple dynasties spanning more than two millennia, it protected silk road trade routes, controlled borders, and defended imperial dynasties against nomadic incursions.`,
        architecture: [
          {
            icon: '🧱',
            title: 'Sticky Rice Mortar',
            desc: 'Ming dynasty builders ingeniously blended slaked lime with sticky rice broth, creating an amylopectin mortar so strong that vegetation cannot grow through the joints centuries later.'
          },
          {
            icon: '🔥',
            title: 'Beacon Fire Signaling',
            desc: 'A sophisticated optical telegraphy network using smoke by day, lantern flames by night, and gunpowder discharges transmitted strategic military alerts across 500 miles in mere hours.'
          },
          {
            icon: '🏔️',
            title: 'Topographic Integration',
            desc: 'The masonry hugs precipitous cliff ridges and razor-edge ridgelines, utilizing steep mountain escarpments as natural defensive bastions.'
          }
        ],
        secrets: [
          {
            q: 'Can the Great Wall really be seen from the Moon with the naked eye?',
            a: 'No, this is a pervasive 20th-century myth. As confirmed by astronauts including Neil Armstrong and Yang Liwei, the wall is only about 5–9 meters wide and blends into surrounding terrain, making it invisible from low lunar or low Earth orbit without optical magnification.'
          },
          {
            q: 'How many workers perished during construction?',
            a: 'Historical chronicles estimate that over 400,000 to 1,000,000 soldiers, convicts, and conscripted peasants died during construction across centuries, earning it the somber literary sobriquet "the longest cemetery on Earth."'
          },
          {
            q: 'Is it one single continuous wall?',
            a: 'No. The Great Wall is actually a complex network of walls, trenches, watchtowers, fortress passes, and barracks built across thousands of non-linear segments by different rival states.'
          }
        ],
        travel: {
          bestTime: 'September to November (Golden Autumn with crisp skies)',
          nearestHub: 'Beijing Capital International Airport (PEK)',
          unescoYear: '1987 (Cultural Heritage)',
          coordinatesFormatted: '40°25\'55" N, 116°34\'13" E'
        }
      },
      {
        id: 'petra',
        name: 'Petra',
        nativeName: 'البتراء (Al-Batrāʾ) / Raqmu',
        country: 'Jordan',
        flag: '🇯🇴',
        coords: [30.3285, 35.4444],
        year: 'circa 312 BC',
        era: 'Nabataean Kingdom',
        category: 'Rock-Cut Architecture',
        thumbnail: 'https://images.unsplash.com/photo-1579606032840-062e7e4871e8?auto=format&fit=crop&w=600&q=80',
        heroImage: 'https://images.unsplash.com/photo-1579606032840-062e7e4871e8?auto=format&fit=crop&w=1600&q=85',
        stats: {
          facadeHeight: '39.1 meters (Al-Khazneh)',
          carvingStyle: 'Hellenistic-Nabataean hybrid',
          waterNetwork: '200+ cisterns & terra-cotta conduits',
          rediscovered: '1812 by Johann Ludwig Burckhardt'
        },
        overview: `Carved directly into vibrant rose-red sandstone cliffs in Jordan's southwestern desert, Petra was the flourishing capital of the Nabataean Bedouin empire. Emerging at the crossroads of Arabia, Egypt, and Syria-Phoenicia, Petra controlled the lucrative frankincense, myrrh, and spice trading caravan routes.`,
        architecture: [
          {
            icon: '🏛️',
            title: 'Top-Down Rock Chiseling',
            desc: 'Nabataean masons carved facades such as the Treasury (Al-Khazneh) from the top cliff-face downward, eliminating the need for timber scaffolding in an arid desert devoid of large trees.'
          },
          {
            icon: '💧',
            title: 'Hydraulic Engineering',
            desc: 'They converted a desert canyon prone to flash floods into an artificial oasis using underground cisterns, filtration purification basins, and pressurized ceramic pipelines.'
          },
          {
            icon: '🎨',
            title: 'Polychrome Sandstone',
            desc: 'The stone swirls with dramatic bands of rose, terracotta, ochre, white, and violet iron-oxide deposits, earning Petra the title "The Rose City."'
          }
        ],
        secrets: [
          {
            q: 'Was the Treasury actually filled with pirate gold?',
            a: 'Local Bedouin folklore held that an Egyptian Pharaoh concealed treasures inside the giant stone urn atop the facade. Bullet gouges from Bedouin rifles are still visible on the urn, but it is solid stone carved in relief!'
          },
          {
            q: 'How much of Petra remains underground?',
            a: 'Archaeologists estimate that roughly 85% of Petra remains unexcavated, buried under desert sedimentation and rubble from catastrophic 4th- and 6th-century earthquakes.'
          },
          {
            q: 'What does "Siq" mean?',
            a: 'The Siq is the dramatic 1.2 km narrow gorge formed by tectonic shearing that serves as the ceremonial entrance into Petra, enclosed by cliffs towering 80 meters high.'
          }
        ],
        travel: {
          bestTime: 'March to May, or September to November',
          nearestHub: 'Queen Alia International Airport (Amman) or Aqaba',
          unescoYear: '1985 (World Heritage)',
          coordinatesFormatted: '30°19\'43" N, 35°26\'40" E'
        }
      },
      {
        id: 'colosseum',
        name: 'The Colosseum',
        nativeName: 'Amphitheatrum Flavium',
        country: 'Italy',
        flag: '🇮🇹',
        coords: [41.8902, 12.4922],
        year: '72 – 80 AD',
        era: 'Flavian Dynasty (Vespasian & Titus)',
        category: 'Roman Imperial Arena',
        thumbnail: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80',
        heroImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=85',
        stats: {
          capacity: '50,000 to 80,000 spectators',
          dimensions: '189m x 156m (6 acres footprint)',
          facadeHeight: '48 meters (4 arcaded storeys)',
          openings: '80 arched vomitoria entrances'
        },
        overview: `Standing at the historic center of Rome, the Colosseum is the grandest amphitheater ever constructed in classical antiquity. Commissioned by Emperor Vespasian on the grounds of Nero's private Golden House, it stood as a monumental gift of public entertainment to the citizens of Rome, hosting gladiatorial contests, battle reenactments, and theatrical dramas.`,
        architecture: [
          {
            icon: '🎪',
            title: 'The Hypogeum',
            desc: 'Beneath the sand arena floor lay a two-level subterranean labyrinth with mechanical winches, trapdoors, and counterweight elevators that lifted beasts and gladiators seamlessly into the arena.'
          },
          {
            icon: '⛵',
            title: 'The Velarium Canopy',
            desc: 'A massive retractable canvas awning rigged by imperial sailors shielded Roman crowds from the blistering sun, tensioned using 240 perimeter corbels.'
          },
          {
            icon: '📐',
            title: 'Classical Orders',
            desc: 'The outer arcades showcase three tiers of classical orders: Doric on the ground floor, Ionic in the middle, and Corinthian on the top tiers.'
          }
        ],
        secrets: [
          {
            q: 'Did they actually flood the Colosseum for sea battles?',
            a: 'Yes! Historical records from Cassius Dio attest that during the inaugural games in 80 AD, Titus flooded the arena via aqueduct valves to stage naumachiae (mock naval combat with warships and water combatants).'
          },
          {
            q: 'Where did the name "Colosseum" originate?',
            a: 'The amphitheater took its name not from its own size, but from the colossal 30-meter bronze statue of Nero (the Colossus Neronis) that stood nearby.'
          },
          {
            q: 'What happened to its missing half?',
            a: 'Severe earthquakes in 847 and 1349 collapsed the southern wall. The fallen travertine stones were subsequently quarried to build St. Peter\'s Basilica and aristocratic Roman palazzi.'
          }
        ],
        travel: {
          bestTime: 'April to May or October (Pleasant Mediterranean climate)',
          nearestHub: 'Leonardo da Vinci-Fiumicino Airport (FCO)',
          unescoYear: '1980 (Historic Centre of Rome)',
          coordinatesFormatted: '41°53\'25" N, 12°29\'32" E'
        }
      },
      {
        id: 'taj-mahal',
        name: 'Taj Mahal',
        nativeName: 'ताज महल / تاج محل ("Crown of the Palace")',
        country: 'India',
        flag: '🇮🇳',
        coords: [27.1751, 78.0421],
        year: '1632 – 1653 AD',
        era: 'Mughal Empire (Shah Jahan)',
        category: 'Mughal Funerary Architecture',
        thumbnail: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80',
        heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=85',
        stats: {
          domeHeight: '73 meters (240 feet)',
          materials: 'Translucent Makrana White Marble',
          artisanCount: '20,000+ sculptors & calligraphers',
          inlayGems: '28 varieties of semi-precious stones'
        },
        overview: `Epitomizing eternal devotion and Mughal architectural perfection, the Taj Mahal is an ivory-white marble mausoleum on the southern bank of the Yamuna River in Agra. Commissioned by Emperor Shah Jahan to house the tomb of his beloved wife Mumtaz Mahal, it harmonizes Persian, Islamic, and Indian artistic traditions with absolute bilateral symmetry.`,
        architecture: [
          {
            icon: '💎',
            title: 'Pietra Dura (Parchin Kari)',
            desc: 'Intricate floral Arabesques inlaid with lapis lazuli from Afghanistan, jade from China, turquoise from Tibet, and carnelian from Arabia carved flush into marble slabs.'
          },
          {
            icon: '⚖️',
            title: 'Engineered Tilt of Minarets',
            desc: 'The four corner minarets were deliberately constructed leaning outward at a slight angle of 1.5 degrees to safeguard the central tomb dome in the event of an earthquake.'
          },
          {
            icon: '🪵',
            title: 'Ebony & Sal Foundation Wells',
            desc: 'Built along riverbanks, the foundation rests upon deep timber caisson wells kept naturally hydrated by the Yamuna River to prevent timber degradation.'
          }
        ],
        secrets: [
          {
            q: 'Does the Taj Mahal change colors throughout the day?',
            a: 'Yes! The translucent Makrana marble absorbs ambient illumination: casting a delicate pearl-pink hue at dawn, gleaming brilliant white at midday, and glowing soft golden-amber under full moonlight.'
          },
          {
            q: 'Did Shah Jahan cut off the builders\' hands?',
            a: 'This is a dramatic romantic myth with no historical foundation. Instead, court documents demonstrate that artisans signed contracts, received pensions, and worked on subsequent imperial commissions.'
          },
          {
            q: 'What breaks the monument\'s flawless symmetry?',
            a: 'The interior cenotaphs! Mumtaz Mahal\'s cenotaph rests dead center of the chamber, while Shah Jahan\'s larger cenotaph was positioned beside hers after his death, breaking the symmetry.'
          }
        ],
        travel: {
          bestTime: 'October to March (Cool winter months)',
          nearestHub: 'Indira Gandhi International Airport (DEL), New Delhi',
          unescoYear: '1983 (World Heritage)',
          coordinatesFormatted: '27°10\'30" N, 78°02\'32" E'
        }
      },
      {
        id: 'machu-picchu',
        name: 'Machu Picchu',
        nativeName: 'Machu Pikchu ("Old Peak")',
        country: 'Peru',
        flag: '🇵🇪',
        coords: [-13.1631, -72.5450],
        year: 'circa 1450 AD',
        era: 'Inca Empire (Pachacuti)',
        category: 'Incan Citadel & Sanctuary',
        thumbnail: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&q=80',
        heroImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1600&q=85',
        stats: {
          altitude: '2,430 meters (7,970 ft)',
          structures: 'Over 200 stone dwellings & temples',
          masonry: 'Ashlar dry-stone granite',
          scientificDiscovery: '1911 by Hiram Bingham'
        },
        overview: `Perched on a narrow ridge between mist-shrouded Andean peaks above the Urubamba River, Machu Picchu is the crown jewel of Incan civilization. Believed to have served as an imperial estate and religious sanctuary for Inca Emperor Pachacuti, the citadel was miraculously never discovered or looted by Spanish conquistadors, preserving its intact stone cosmology.`,
        architecture: [
          {
            icon: '🧩',
            title: 'Mortarless Ashlar Masonry',
            desc: 'Granite blocks were chiseled and polished to fit together so precisely without mortar that even a razor blade cannot slide between adjacent stones.'
          },
          {
            icon: '🌱',
            title: 'Agricultural Terraces',
            desc: 'Over 700 tiered agricultural terraces prevented soil erosion, provided microclimates for diverse crops, and incorporated a sophisticated gravel drainage foundation.'
          },
          {
            icon: '☀️',
            title: 'Intihuatana Solar Clock',
            desc: 'A sacred carved bedrock projection designed to "tie the sun" during winter solstice, aligning precisely with cardinal axes and sacred mountain apus.'
          }
        ],
        secrets: [
          {
            q: 'How did stones survive violent Andean earthquakes?',
            a: 'The dry-stone blocks "dance" during seismic shocks, shifting in place and then reseating into their interlocking grooves without walls fracturing.'
          },
          {
            q: 'Was it truly a "Lost City"?',
            a: 'While unknown to the Spanish and modern Western academia until 1911, local Quechua farming families (such as Melchor Arteaga) were actively living and farming on the terraces when Hiram Bingham arrived.'
          },
          {
            q: 'Why was the citadel abandoned after barely a century?',
            a: 'Historians hypothesize that smallpox outbreaks brought by Europeans swept ahead of the conquistadors, decimating the royal lineage before the site was deliberately concealed.'
          }
        ],
        travel: {
          bestTime: 'May to October (Dry Andean winter season)',
          nearestHub: 'Alejandro Velasco Astete Airport (CUZ), Cusco',
          unescoYear: '1983 (Mixed Cultural & Natural Heritage)',
          coordinatesFormatted: '13°09\'47" S, 72°32\'44" W'
        }
      },
      {
        id: 'chichen-itza',
        name: 'Chichén Itzá',
        nativeName: 'Chi\'ch\'èen Ìitsha\' ("Mouth of the Well of the Itza")',
        country: 'Mexico',
        flag: '🇲🇽',
        coords: [20.6843, -88.5678],
        year: '600 – 1200 AD',
        era: 'Late Classic to Early Postclassic Maya',
        category: 'Maya-Toltec Ceremonial Center',
        thumbnail: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=600&q=80',
        heroImage: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1600&q=85',
        stats: {
          height: '30 meters (El Castillo)',
          stepsCount: '365 steps total (Calendar year)',
          cenoteDepth: '22 meters to water surface',
          ballCourt: '168m x 70m (Largest in Americas)'
        },
        overview: `Located in the dense jungle of Mexico's Yucatán Peninsula, Chichén Itzá was a preeminent religious, economic, and celestial metropolis of the Maya-Toltec world. Dominated by the Pyramid of Kukulcán (El Castillo), the city integrated advanced Mayan astronomical calendars directly into monumental stone architecture.`,
        architecture: [
          {
            icon: '🐍',
            title: 'Equinox Serpent Illusion',
            desc: 'On spring and autumn equinoxes, the late afternoon sun casts seven triangular shadows down the north balustrade, creating the undulating body of the feathered serpent deity Kukulcán.'
          },
          {
            icon: '🕊️',
            title: 'Quetzal Acoustic Resonance',
            desc: 'A handclap at the base of El Castillo echoes up the limestone steps, producing an acoustic chirp mimicking the sacred Resplendent Quetzal bird.'
          },
          {
            icon: '🔭',
            title: 'El Caracol Observatory',
            desc: 'A spiral domed tower with precision viewing apertures aligned to track the extreme northern and southern horizon cycles of the planet Venus.'
          }
        ],
        secrets: [
          {
            q: 'Is there a pyramid inside the pyramid?',
            a: 'Yes! In the 1930s and 2016, radar revealed that El Castillo is built like a Russian nesting doll: enclosing an earlier 9th-century temple, which itself encloses an even older sacred shrine over an underground cenote.'
          },
          {
            q: 'What occurred at the Great Ball Court?',
            a: 'Teams competed to shoot a solid rubber ball through high stone rings without using hands or feet. Stone bas-reliefs depict decapitation rituals honoring victorious team captains.'
          },
          {
            q: 'What role did Cenotes play?',
            a: 'With no rivers in Yucatán, the Sacred Cenote (sinkhole) provided fresh water and served as a portal to Xibalba (the underworld), receiving jade, gold, and ceremonial offerings to Chaac, god of rain.'
          }
        ],
        travel: {
          bestTime: 'November to April (Comfortable temperature and humidity)',
          nearestHub: 'Cancún International Airport (CUN) or Mérida',
          unescoYear: '1988 (World Heritage)',
          coordinatesFormatted: '20°41\'03" N, 88°34\'04" W'
        }
      },
      {
        id: 'christ-the-redeemer',
        name: 'Christ the Redeemer',
        nativeName: 'Cristo Redentor',
        country: 'Brazil',
        flag: '🇧🇷',
        coords: [-22.9519, -43.2105],
        year: '1922 – 1931 AD',
        era: 'Modernist Art Deco',
        category: 'Monumental Sculpture',
        thumbnail: 'https://images.unsplash.com/photo-1593995863951-5e994e366488?auto=format&fit=crop&w=600&q=80',
        heroImage: 'https://images.unsplash.com/photo-1593995863951-5e994e366488?auto=format&fit=crop&w=1600&q=85',
        stats: {
          height: '38 meters (including 8m pedestal)',
          armSpan: '28 meters (92 feet)',
          totalWeight: '1,145 metric tons',
          summitElevation: '710 meters above sea level'
        },
        overview: `Crowning the granite peak of Corcovado mountain high above Rio de Janeiro and Guanabara Bay, Christ the Redeemer is an internationally recognized icon of peace and warm hospitality. Designed by French-Polish sculptor Paul Landowski and Brazilian engineer Heitor da Silva Costa, it is the largest Art Deco sculpture in the world.`,
        architecture: [
          {
            icon: '🗿',
            title: 'Reinforced Concrete Core',
            desc: 'Pioneering structural design by French engineer Albert Caquot allowed the colossal cantilevered arms to withstand hurricane-force winds atop the 700m peak.'
          },
          {
            icon: '✨',
            title: 'Soapstone Mosaic Tiles',
            desc: 'The outer shell is tiled with over 6 million triangular Swedish soapstone tesserae, applied by women volunteers who wrote personal prayers and wishes on the back of tiles before gluing them.'
          },
          {
            icon: '⚡',
            title: 'Lightning Conductor Network',
            desc: 'Perched high in the tropical clouds, the statue is struck by lightning 3 to 6 times per year. A network of grounding cables routed through the crown and fingertips channels lightning safely away.'
          }
        ],
        secrets: [
          {
            q: 'Is there a heart inside the statue?',
            a: 'Yes! On the exterior of the chest is an Art Deco relief heart, and directly inside the hollow torso is an eight-sided concrete heart measuring 1.3 meters across, containing an inscribed bottle by the engineering team.'
          },
          {
            q: 'How was the statue brought up the steep mountain?',
            a: 'All heavy granite blocks, concrete, and cast plaster components were hauled up Corcovado using the historic cogwheel railway (Estrada de Ferro do Corcovado), which predated the statue.'
          },
          {
            q: 'Was it almost built holding a globe and cross?',
            a: 'The original design proposed Christ holding a large brass globe in one hand and a cross in the other. Locals playfully called it "Christ with a balloon," prompting the team to revise it to the open-armed posture.'
          }
        ],
        travel: {
          bestTime: 'May to October (Clear blue coastal skies and lower humidity)',
          nearestHub: 'Rio de Janeiro/Galeão International Airport (GIG)',
          unescoYear: '2012 (Rio de Janeiro Carioca Landscapes)',
          coordinatesFormatted: '22°57\'07" S, 43°12\'38" W'
        }
      },
      {
        id: 'great-pyramid',
        name: 'Great Pyramid of Giza',
        nativeName: 'هرم خوفو (Akhet Khufu - "Khufu\'s Horizon")',
        country: 'Egypt',
        flag: '🇪🇬',
        coords: [29.9792, 31.1342],
        year: 'circa 2560 BC',
        era: 'Old Kingdom (Fourth Dynasty)',
        category: 'Honorary Wonder & Sole Standing Ancient Wonder',
        thumbnail: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80',
        heroImage: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1600&q=85',
        stats: {
          height: '146.6m original (138.5m today)',
          blockCount: '~2.3 million limestone blocks',
          averageBlockWeight: '2.5 to 15 tons each',
          alignmentError: 'Under 4 arcminutes to True North'
        },
        overview: `The oldest and sole surviving monument of the original Seven Wonders of the Ancient World, the Great Pyramid was granted Honorary Status in the New7Wonders election. Built for Pharaoh Khufu over a 27-year reign, it remained the tallest human-made structure on planet Earth for over 3,800 years until Lincoln Cathedral\'s spire in England was erected in 1311.`,
        architecture: [
          {
            icon: '📐',
            title: 'Cardinal True North Alignment',
            desc: 'The four base edges align to cardinal True North with an astonishing accuracy of just 3/60ths of a degree, achieved without magnetic compasses using astronomical circumpolar star transit lines.'
          },
          {
            icon: '👑',
            title: 'King\'s Chamber Relief Relieving Blocks',
            desc: 'Above the granite sarcophagus chamber sit five tiers of massive granite beams weighing up to 50 tons, capped by a vaulted gabled ceiling that deflects millions of tons of overhead weight outward.'
          },
          {
            icon: '🌟',
            title: 'Tura Casing Stones',
            desc: 'Originally encased in gleaming polished white Tura limestone that reflected sunlight like a celestial jewel visible for dozens of miles.'
          }
        ],
        secrets: [
          {
            q: 'Was it constructed by enslaved laborers?',
            a: 'Archaeological discoveries of the builders\' city and tombs excavated by Dr. Zahi Hawass revealed that the workforce consisted of respected Egyptian artisans and seasonal farmers who received rations of meat, beer, and medical care.'
          },
          {
            q: 'What is the mysterious "Big Void"?',
            a: 'In 2017, the ScanPyramids project using cosmic-ray muon radiography detected a massive previously unknown corridor at least 30 meters long situated directly above the Grand Gallery.'
          },
          {
            q: 'Does it have eight sides instead of four?',
            a: 'Yes! High-altitude aerial photographs show a subtle concave indentation running down the center of each of the four faces, effectively making it an eight-sided pyramid.'
          }
        ],
        travel: {
          bestTime: 'October to April (Temperate winter desert temperatures)',
          nearestHub: 'Cairo International Airport (CAI) or Sphinx Airport (SPX)',
          unescoYear: '1979 (Memphis and its Necropolis)',
          coordinatesFormatted: '29°58\'45" N, 31°08\'03" E'
        }
      }
    ],

    ancient: [
      {
        id: 'ancient-pyramid',
        name: 'Great Pyramid of Giza',
        nativeName: 'Akhet Khufu',
        country: 'Egypt',
        flag: '🇪🇬',
        coords: [29.9792, 31.1342],
        year: 'c. 2560 BC',
        era: 'Ancient Egypt (Fourth Dynasty)',
        category: 'Ancient Royal Tomb (Only Survivor)',
        thumbnail: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80',
        heroImage: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1600&q=85',
        stats: {
          originalHeight: '146.6 meters',
          status: 'Extant (Intact today)',
          builder: 'Hemiunu (Royal Architect)',
          weight: '~6,000,000 metric tons'
        },
        overview: 'The oldest of the Ancient Wonders and the only one that remains largely intact today. Stood for millennia as testament to the mathematical prowess of Old Kingdom Egypt.',
        architecture: [
          { icon: '📐', title: 'Cosmic Orientation', desc: 'Aligned to within 3/60ths of a degree of True North.' },
          { icon: '🗿', title: 'Aswan Granite', desc: 'Monolithic granite transported 800 km down the Nile.' },
          { icon: '✨', title: 'Polished Casing', desc: 'Covered in polished white Tura limestone.' }
        ],
        secrets: [
          { q: 'Why did it survive when others fell?', a: 'Its sheer mass and broad pyramid foundation made it immune to earthquakes that destroyed the other six ancient wonders.' }
        ],
        travel: { bestTime: 'November to February', nearestHub: 'Cairo, Egypt', unescoYear: '1979', coordinatesFormatted: '29°58\'45" N, 31°08\'03" E' }
      },
      {
        id: 'hanging-gardens',
        name: 'Hanging Gardens of Babylon',
        nativeName: 'Κρεμαστοί Κήποι της Βαβυλώνας',
        country: 'Iraq (Ancient Mesopotamia)',
        flag: '🇮🇶',
        coords: [32.5422, 44.4210],
        year: 'c. 600 BC',
        era: 'Neo-Babylonian Empire',
        category: 'Botanical & Terraced Engineering',
        thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
        heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85',
        stats: {
          height: 'Estimated 25 to 30 meters',
          status: 'Destroyed by earthquakes (2nd c. BC)',
          builder: 'King Nebuchadnezzar II',
          purpose: 'Gift to Queen Amytis of Media'
        },
        overview: 'Described by classical Greek historians as ascending tiered stone terraces lush with exotic trees and cascading blooms in the dry plains of Mesopotamia.',
        architecture: [
          { icon: '🌿', title: 'Archimedes Screw', desc: 'Water pumped continuously from the Euphrates River.' },
          { icon: '🧱', title: 'Lead Waterproofing', desc: 'Sheets of lead prevented water from rotting brick vaults.' },
          { icon: '🌴', title: 'Hanging Flora', desc: 'Gardens suspended on pillared stone arcades.' }
        ],
        secrets: [
          { q: 'Did the gardens actually exist?', a: 'No Babylonian cuneiform records explicitly mention them; some historians believe they were actually located in Nineveh built by Sennacherib.' }
        ],
        travel: { bestTime: 'Autumn or Spring', nearestHub: 'Baghdad International Airport', unescoYear: '2019 (Babylon site)', coordinatesFormatted: '32°32\'32" N, 44°25\'16" E' }
      },
      {
        id: 'statue-zeus',
        name: 'Statue of Zeus at Olympia',
        nativeName: 'Ἄγαλμα τοῦ Ὀλυμπίου Διός',
        country: 'Greece',
        flag: '🇬🇷',
        coords: [37.6378, 21.6300],
        year: 'c. 435 BC',
        era: 'Classical Greece',
        category: 'Chryselephantine Colossus',
        thumbnail: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
        heroImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85',
        stats: {
          height: '12.4 meters (41 feet)',
          sculptor: 'Phidias (Master of the Parthenon)',
          status: 'Destroyed by fire (5th c. AD)',
          materials: 'Ivory plates & solid gold drapery'
        },
        overview: 'A colossal seated figure of Zeus that filled the Temple of Olympia, holding Nike in his right hand and a scepter crowned with an eagle in his left.',
        architecture: [
          { icon: '⚡', title: 'Chryselephantine', desc: 'Carved ivory skin over cedarwood framework with gold sheets.' },
          { icon: '🪑', title: 'Ebony Throne', desc: 'Inlaid with ebony, precious gems, and mythological reliefs.' },
          { icon: '🛢️', title: 'Olive Oil Reservoir', desc: 'A shallow pool of olive oil kept the ivory from cracking.' }
        ],
        secrets: [
          { q: 'Where was Phidias\' workshop found?', a: 'Archaeologists uncovered Phidias\' actual workshop adjacent to the temple with tools and a cup inscribed "I belong to Phidias".' }
        ],
        travel: { bestTime: 'April to June', nearestHub: 'Athens or Araxos, Greece', unescoYear: '1989 (Olympia)', coordinatesFormatted: '37°38\'16" N, 21°37\'48" E' }
      },
      {
        id: 'temple-artemis',
        name: 'Temple of Artemis at Ephesus',
        nativeName: 'Ἀρτεμίσιον (Artemision)',
        country: 'Turkey',
        flag: '🇹🇷',
        coords: [37.9497, 27.3639],
        year: 'c. 550 BC',
        era: 'Archaic to Hellenistic Greece',
        category: 'Ionic Dipteral Temple',
        thumbnail: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80',
        heroImage: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1600&q=85',
        stats: {
          columns: '127 Ionic columns (18m high each)',
          status: 'Destroyed in arson by Herostratus (356 BC)',
          rebuilt: 'Rebuilt by Alexander the Great',
          size: 'Twice the footprint of Athens Parthenon'
        },
        overview: 'Dedicated to Artemis, goddess of the wilderness and moon, this colossal marble temple was celebrated as the most magnificent of all the ancient wonders.',
        architecture: [
          { icon: '🏛️', title: 'Carved Relief Columns', desc: 'Lower column drums sculpted with figures by Scopas.' },
          { icon: '💎', title: 'Parian Marble', desc: 'Built entirely from brilliant white Aegean marble.' },
          { icon: '🛡️', title: 'Swamp Foundation', desc: 'Built on marshes with charcoal layers to absorb earthquakes.' }
        ],
        secrets: [
          { q: 'Why was it burned down?', a: 'Herostratus burned it down in 356 BC for the sole purpose of having his name remembered forever in history.' }
        ],
        travel: { bestTime: 'May or October', nearestHub: 'Izmir Adnan Menderes Airport (ADB)', unescoYear: '2015 (Ephesus)', coordinatesFormatted: '37°56\'59" N, 27°21\'50" E' }
      },
      {
        id: 'mausoleum-halicarnassus',
        name: 'Mausoleum at Halicarnassus',
        nativeName: 'Μαυσωλεῖον τῆς Ἁλικαρνασσοῦ',
        country: 'Turkey',
        flag: '🇹🇷',
        coords: [37.0379, 27.4241],
        year: '353 – 350 BC',
        era: 'Achaemenid Satrapy of Caria',
        category: 'Funerary Monument',
        thumbnail: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80',
        heroImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=85',
        stats: {
          height: '45 meters (148 feet)',
          architects: 'Satyros and Pythius of Priene',
          status: 'Destroyed by medieval earthquakes (12th-15th c.)',
          legacy: 'Gave rise to the word "Mausoleum"'
        },
        overview: 'Tomb built for Mausolus, ruler of Caria, and his sister-wife Artemisia II. Its architectural fusion of Lycian, Greek, and Egyptian styles was adorned with hundreds of life-size statues.',
        architecture: [
          { icon: '🐎', title: 'Quadriga Chariot', desc: 'A monumental four-horse marble chariot crowned the apex.' },
          { icon: '🗡️', title: 'Amazonomachy Frieze', desc: 'High relief depictions of Greek battles carved around perimeter.' },
          { icon: '📐', title: 'Stepped Pyramid Roof', desc: '24-step truncated pyramid connecting colonnade to crown.' }
        ],
        secrets: [
          { q: 'Where are the remnants today?', a: 'Crusader Knights of St. John used its marble to fortify Bodrum Castle; major friezes are preserved in the British Museum.' }
        ],
        travel: { bestTime: 'April to June', nearestHub: 'Milas-Bodrum Airport (BJV)', unescoYear: 'Archaeological site open in Bodrum', coordinatesFormatted: '37°02\'16" N, 27°25\'27" E' }
      },
      {
        id: 'colossus-rhodes',
        name: 'Colossus of Rhodes',
        nativeName: 'Ὁ Κολοσσὸς Ῥόδιος',
        country: 'Greece',
        flag: '🇬🇷',
        coords: [36.4511, 28.2258],
        year: '292 – 280 BC',
        era: 'Hellenistic Era (Rhodes)',
        category: 'Heroic Bronze Colossus',
        thumbnail: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=600&q=80',
        heroImage: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1600&q=85',
        stats: {
          height: '33 meters (108 feet)',
          sculptor: 'Chares of Lindos',
          status: 'Fell in 226 BC earthquake (stood 54 years)',
          dedication: 'Sun god Helios'
        },
        overview: 'Erected by the citizens of Rhodes to celebrate victory over the Macedonian siege of Demetrius Poliorcetes, cast from melted bronze war machinery left behind.',
        architecture: [
          { icon: '☀️', title: 'Helios Sun Radiance', desc: 'Held a torch or shaded his brow looking over the Aegean sea.' },
          { icon: '⚓', title: 'Iron Frame & Stone Core', desc: 'Tied together with an internal iron armature weighted with stone.' },
          { icon: '🔥', title: 'Cast On-Site', desc: 'Constructed upward in earthen mounds tier by tier.' }
        ],
        secrets: [
          { q: 'Did it straddle the harbor entrance?', a: 'No, medieval illustrations depicting ships sailing between its legs are structurally impossible; it stood firmly on land overlooking the harbor.' }
        ],
        travel: { bestTime: 'May to September', nearestHub: 'Rhodes International Airport (RHO)', unescoYear: '1988 (Medieval City of Rhodes)', coordinatesFormatted: '36°27\'04" N, 28°13\'33" E' }
      },
      {
        id: 'lighthouse-alexandria',
        name: 'Lighthouse of Alexandria',
        nativeName: 'ὁ Φάρος τῆς Ἀλεξανδρείας (Pharos)',
        country: 'Egypt',
        flag: '🇪🇬',
        coords: [31.2140, 29.8856],
        year: 'c. 280 BC',
        era: 'Ptolemaic Kingdom',
        category: 'Maritime Navigation Tower',
        thumbnail: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=600&q=80',
        heroImage: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1600&q=85',
        stats: {
          height: '100 to 118 meters (330–387 ft)',
          status: 'Damaged by 956, 1303, & 1323 earthquakes',
          lightRange: 'Beacons visible up to 47 km (29 miles)',
          architect: 'Sostratus of Cnidus'
        },
        overview: 'Guiding trade vessels into Alexandria\'s harbor for centuries, the Pharos of Alexandria was among the tallest structures of the classical world and gave its name ("Pharos") to lighthouses in dozens of modern romance languages.',
        architecture: [
          { icon: '🏮', title: 'Polished Bronze Mirror', desc: 'Reflected sunlight during the day and huge wood oil fires by night.' },
          { icon: '📐', title: 'Three-Tier Profile', desc: 'Square lower bastion, octagonal midsection, cylindrical top beacon.' },
          { icon: '🌊', title: 'Lead Mortar Joints', desc: 'Interlocking masonry sealed with molten lead to withstand pounding waves.' }
        ],
        secrets: [
          { q: 'What stands in its place now?', a: 'Sultan Qaitbay built the Citadel of Qaitbay in 1480 on the exact site, using fallen stone blocks from the original lighthouse.' }
        ],
        travel: { bestTime: 'March or November', nearestHub: 'Borg El Arab Airport (HBE), Alexandria', unescoYear: 'Submerged archaeology project', coordinatesFormatted: '31°12\'50" N, 29°53\'08" E' }
      }
    ]
  };

  /* ==========================================================================
     MAP TILE PROVIDERS
     ========================================================================== */
  const MAP_STYLES = {
    dark: {
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19
    },
    satellite: {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      maxZoom: 18
    },
    antique: {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    },
    voyager: {
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19
    }
  };

  /* ==========================================================================
     APP STATE
     ========================================================================== */
  const state = {
    currentCollection: 'new',
    currentWonderIndex: 0,
    currentTileStyle: 'dark',
    tourActive: false,
    tourInterval: null,
    audioEnabled: false,
    audioCtx: null,
    markers: [],
    map: null,
    currentTileLayer: null
  };

  /* ==========================================================================
     AUDIO SYNTHESIS (Zero External Audio Files - Instant & Pure Web Audio API)
     ========================================================================== */
  function initAudio() {
    if (!state.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        state.audioCtx = new AudioContext();
      }
    }
  }

  function playLuxuryChime(freq = 528, type = 'sine') {
    if (!state.audioEnabled || !state.audioCtx) return;
    try {
      if (state.audioCtx.state === 'suspended') {
        state.audioCtx.resume();
      }
      const osc = state.audioCtx.createOscillator();
      const gain = state.audioCtx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, state.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, state.audioCtx.currentTime + 0.35);

      gain.gain.setValueAtTime(0.08, state.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, state.audioCtx.currentTime + 0.6);

      osc.connect(gain);
      gain.connect(state.audioCtx.destination);

      osc.start();
      osc.stop(state.audioCtx.currentTime + 0.65);
    } catch (e) {
      console.warn('Audio feedback failed', e);
    }
  }

  function playHoverTone() {
    playLuxuryChime(440, 'triangle');
  }

  function playModalChime() {
    playLuxuryChime(587.33, 'sine'); // D5 note
  }

  /* ==========================================================================
     MAP INITIALIZATION
     ========================================================================== */
  function initMap() {
    state.map = L.map('map', {
      center: [25.0, 10.0],
      zoom: 3,
      minZoom: 2,
      maxZoom: 18,
      zoomControl: true,
      worldCopyJump: true
    });

    setTileLayer('dark');

    // Live coordinate tracker
    const liveCoordEl = document.getElementById('liveCoordinates');
    state.map.on('mousemove', (e) => {
      const lat = e.latlng.lat.toFixed(4);
      const lng = e.latlng.lng.toFixed(4);
      const latDir = lat >= 0 ? 'N' : 'S';
      const lngDir = lng >= 0 ? 'E' : 'W';
      liveCoordEl.textContent = `LAT: ${Math.abs(lat)}° ${latDir} | LON: ${Math.abs(lng)}° ${lngDir}`;
    });

    renderWonders();
  }

  function setTileLayer(styleKey) {
    if (state.currentTileLayer) {
      state.map.removeLayer(state.currentTileLayer);
    }
    const style = MAP_STYLES[styleKey] || MAP_STYLES.dark;
    state.currentTileLayer = L.tileLayer(style.url, {
      attribution: style.attribution,
      maxZoom: style.maxZoom,
      subdomains: 'abcd'
    }).addTo(state.map);
    state.currentTileStyle = styleKey;
  }

  /* ==========================================================================
     CREATE CUSTOM MARKER WITH HOVER TOOLTIP & CLICK MODAL
     ========================================================================== */
  function createWonderMarker(wonder, index) {
    // Custom DivIcon with glowing golden radar halo
    const markerHtml = `
      <div class="wonder-marker" data-wonder-id="${wonder.id}" data-index="${index}">
        <div class="marker-halo"></div>
        <div class="marker-halo"></div>
        <div class="marker-body">
          <span class="marker-icon">✦</span>
        </div>
      </div>
    `;

    const customIcon = L.divIcon({
      html: markerHtml,
      className: 'custom-wonder-pin',
      iconSize: [44, 44],
      iconAnchor: [22, 22],
      tooltipAnchor: [0, -26]
    });

    const marker = L.marker(wonder.coords, { icon: customIcon }).addTo(state.map);

    // Luxury Hover Preview Card HTML
    const previewHtml = `
      <div class="preview-card">
        <div class="preview-img-box">
          <img src="${wonder.thumbnail}" alt="${wonder.name}" class="preview-img" loading="lazy" />
          <div class="preview-overlay"></div>
          <span class="preview-tag">${wonder.flag} ${wonder.country}</span>
        </div>
        <div class="preview-body">
          <h3 class="preview-title">${wonder.name}</h3>
          <div class="preview-meta">
            <span>${wonder.era}</span>
          </div>
          <div class="preview-cta">
            <span>Explore Educational Archive</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    `;

    // Bind custom hover tooltip
    marker.bindTooltip(previewHtml, {
      className: 'wonder-preview-tooltip',
      direction: 'top',
      opacity: 1,
      offset: [0, -22],
      sticky: false
    });

    // Sound effect & highlight on hover
    marker.on('mouseover', () => {
      playHoverTone();
      highlightShelfCard(index);
    });

    // Click handler to open the educational modal
    marker.on('click', () => {
      openWonderModal(index);
    });

    return marker;
  }

  /* ==========================================================================
     RENDER ACTIVE WONDERS LIST (MAP & BOTTOM SHELF)
     ========================================================================== */
  function renderWonders() {
    // Clear existing markers
    state.markers.forEach(m => state.map.removeLayer(m));
    state.markers = [];

    const activeList = WONDERS_DATA[state.currentCollection];
    const cardsTrack = document.getElementById('cardsTrack');
    const badgeCount = document.getElementById('shelfCountBadge');

    cardsTrack.innerHTML = '';
    badgeCount.textContent = `${activeList.length} LOCATIONS`;

    activeList.forEach((wonder, idx) => {
      // 1. Create Map Marker
      const marker = createWonderMarker(wonder, idx);
      state.markers.push(marker);

      // 2. Create Bottom Shelf Card
      const card = document.createElement('div');
      card.className = 'shelf-card';
      card.dataset.index = idx;
      card.innerHTML = `
        <img src="${wonder.thumbnail}" alt="${wonder.name}" class="shelf-card-img" loading="lazy">
        <div class="shelf-card-gradient"></div>
        <div class="shelf-card-content">
          <div class="shelf-card-title">${wonder.name}</div>
          <div class="shelf-card-subtitle">${wonder.flag} ${wonder.country}</div>
        </div>
      `;

      card.addEventListener('mouseenter', () => {
        playHoverTone();
        marker.openTooltip();
      });

      card.addEventListener('mouseleave', () => {
        marker.closeTooltip();
      });

      card.addEventListener('click', () => {
        openWonderModal(idx);
      });

      cardsTrack.appendChild(card);
    });

    // Fit map bounds smoothly
    fitMapToWonders();
  }

  function fitMapToWonders() {
    const activeList = WONDERS_DATA[state.currentCollection];
    const group = L.featureGroup(state.markers);
    if (activeList.length > 0) {
      state.map.fitBounds(group.getBounds().pad(0.2), {
        maxZoom: 5,
        animate: true,
        duration: 1.2
      });
    }
  }

  function highlightShelfCard(index) {
    const cards = document.querySelectorAll('.shelf-card');
    cards.forEach((card, i) => {
      if (i === index) {
        card.classList.add('is-active');
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        card.classList.remove('is-active');
      }
    });
  }

  /* ==========================================================================
     EDUCATIONAL MODAL WINDOW CONTROLLER
     ========================================================================== */
  function openWonderModal(index) {
    const activeList = WONDERS_DATA[state.currentCollection];
    if (index < 0 || index >= activeList.length) return;

    state.currentWonderIndex = index;
    const wonder = activeList[index];

    // Smooth map fly-to
    state.map.flyTo(wonder.coords, 8, {
      duration: 1.6,
      easeLinearity: 0.25
    });

    highlightShelfCard(index);
    playModalChime();

    // Populate Modal Content
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
      <!-- Hero Banner -->
      <div class="modal-hero">
        <img src="${wonder.heroImage}" alt="${wonder.name}" class="modal-hero-img">
        <div class="modal-hero-overlay"></div>
        <div class="modal-hero-content">
          <div class="modal-badge-row">
            <span class="modal-badge">${wonder.flag} ${wonder.country}</span>
            <span class="modal-badge secondary">${wonder.category}</span>
          </div>
          <h2 class="modal-title" id="modalTitle">${wonder.name}</h2>
          <p class="modal-native-title">${wonder.nativeName}</p>
        </div>
      </div>

      <!-- Quick Metrics Bar -->
      <div class="modal-stats-bar">
        ${Object.entries(wonder.stats).map(([k, v]) => `
          <div class="stat-item">
            <span class="stat-label">${k.replace(/([A-Z])/g, ' $1')}</span>
            <span class="stat-val">${v}</span>
          </div>
        `).join('')}
      </div>

      <!-- Navigation Tabs -->
      <nav class="modal-tabs" role="tablist">
        <button class="modal-tab-btn active" data-tab="tab-overview">Overview & History</button>
        <button class="modal-tab-btn" data-tab="tab-architecture">Architectural Marvels</button>
        <button class="modal-tab-btn" data-tab="tab-secrets">Mysteries & Curiosities</button>
        <button class="modal-tab-btn" data-tab="tab-travel">Travel & Geography</button>
      </nav>

      <!-- Tab Content Panels -->
      <div class="tab-panel-container">
        <!-- Tab 1: Overview -->
        <div id="tab-overview" class="tab-panel active">
          <div class="overview-grid">
            <div class="prose-section">
              <h3>Historical Archive</h3>
              <p>${wonder.overview}</p>
              <div class="highlight-box">
                <p>"A monumental testament to human ambition, craftsmanship, and the enduring quest to harmonize earthly stone with cosmic purpose."</p>
              </div>
            </div>

            <div class="side-fact-card">
              <h4 class="side-fact-title">✦ Chronology & Era</h4>
              <ul class="fact-list">
                <li><strong>Construction Era:</strong> ${wonder.year}</li>
                <li><strong>Historical Civilization:</strong> ${wonder.era}</li>
                <li><strong>Current Coordinates:</strong> ${wonder.travel.coordinatesFormatted}</li>
                <li><strong>UNESCO Recognition:</strong> ${wonder.travel.unescoYear}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Tab 2: Architecture -->
        <div id="tab-architecture" class="tab-panel">
          <div class="arch-grid">
            ${wonder.architecture.map(a => `
              <div class="arch-card">
                <div class="arch-card-icon">${a.icon}</div>
                <div class="arch-card-title">${a.title}</div>
                <p class="arch-card-desc">${a.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tab 3: Mysteries & Curiosities -->
        <div id="tab-secrets" class="tab-panel">
          <div class="secrets-list">
            ${wonder.secrets.map((s, i) => `
              <div class="secret-item">
                <div class="secret-header">
                  <span class="secret-number">0${i + 1}</span>
                  <div class="secret-question">${s.q}</div>
                </div>
                <div class="secret-answer">${s.a}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tab 4: Travel & Explorer -->
        <div id="tab-travel" class="tab-panel">
          <div class="travel-grid">
            <div class="travel-card">
              <h4>Expedition Planning</h4>
              <p><strong>Ideal Season:</strong> ${wonder.travel.bestTime}</p>
              <p style="margin-top: 10px;"><strong>Nearest Hub:</strong> ${wonder.travel.nearestHub}</p>
              <p style="margin-top: 10px;"><strong>Geographic Position:</strong> ${wonder.travel.coordinatesFormatted}</p>
              
              <a href="https://www.google.com/maps/search/?api=1&query=${wonder.coords[0]},${wonder.coords[1]}" target="_blank" rel="noopener noreferrer" class="satellite-link-btn">
                <span>Open in Google Satellite 3D</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>

            <div class="travel-card">
              <h4>Conservation & Heritage</h4>
              <p>This monument is safeguarded under international cultural preservation treaties. Tourism is carefully regulated to prevent erosion, structural fatigue, and atmospheric decay.</p>
              <div style="margin-top: 16px; font-size: 13px; color: var(--gold-light);">
                ✦ Verified GPS Target: ${wonder.coords[0].toFixed(4)}° N, ${wonder.coords[1].toFixed(4)}° E
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Bind tab switching
    modalContent.querySelectorAll('.modal-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        modalContent.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
        modalContent.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetId = btn.getAttribute('data-tab');
        const panel = document.getElementById(targetId);
        if (panel) panel.classList.add('active');
      });
    });

    // Reveal overlay
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function nextWonder() {
    const activeList = WONDERS_DATA[state.currentCollection];
    const nextIdx = (state.currentWonderIndex + 1) % activeList.length;
    openWonderModal(nextIdx);
  }

  function prevWonder() {
    const activeList = WONDERS_DATA[state.currentCollection];
    const prevIdx = (state.currentWonderIndex - 1 + activeList.length) % activeList.length;
    openWonderModal(prevIdx);
  }

  /* ==========================================================================
     GRAND TOUR AUTOPILOT
     ========================================================================== */
  function startGrandTour() {
    if (state.tourActive) return;
    state.tourActive = true;

    const banner = document.getElementById('tourBanner');
    banner.classList.remove('hidden');
    closeModal();

    let step = 0;
    const activeList = WONDERS_DATA[state.currentCollection];

    function tourNext() {
      if (!state.tourActive) return;
      const progressEl = document.getElementById('tourProgress');
      progressEl.textContent = `Wonder ${step + 1} of ${activeList.length}: ${activeList[step].name}`;

      const target = activeList[step];
      state.map.flyTo(target.coords, 6, {
        duration: 3,
        easeLinearity: 0.3
      });

      // Highlight marker tooltip
      if (state.markers[step]) {
        state.markers.forEach(m => m.closeTooltip());
        state.markers[step].openTooltip();
        highlightShelfCard(step);
      }

      step = (step + 1) % activeList.length;
    }

    tourNext();
    state.tourInterval = setInterval(tourNext, 6500);
  }

  function stopGrandTour() {
    state.tourActive = false;
    if (state.tourInterval) {
      clearInterval(state.tourInterval);
      state.tourInterval = null;
    }
    const banner = document.getElementById('tourBanner');
    banner.classList.add('hidden');
  }

  /* ==========================================================================
     DOM EVENT LISTENERS & USER CONTROLS
     ========================================================================== */
  function bindEvents() {
    // Collection Toggles
    const btnNew = document.getElementById('btnNewWonders');
    const btnAncient = document.getElementById('btnAncientWonders');

    btnNew.addEventListener('click', () => {
      if (state.currentCollection === 'new') return;
      state.currentCollection = 'new';
      btnNew.classList.add('active');
      btnAncient.classList.remove('active');
      stopGrandTour();
      renderWonders();
    });

    btnAncient.addEventListener('click', () => {
      if (state.currentCollection === 'ancient') return;
      state.currentCollection = 'ancient';
      btnAncient.classList.add('active');
      btnNew.classList.remove('active');
      stopGrandTour();
      renderWonders();
    });

    // Map Style Options
    const styleMenu = document.getElementById('mapStyleMenu');
    styleMenu.querySelectorAll('.style-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const style = btn.getAttribute('data-style');
        styleMenu.querySelectorAll('.style-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        setTileLayer(style);
      });
    });

    // Reset View Button
    document.getElementById('btnResetView').addEventListener('click', () => {
      stopGrandTour();
      fitMapToWonders();
    });

    // Audio Toggle
    const btnAudio = document.getElementById('btnAudioToggle');
    const iconAudioOff = document.getElementById('iconAudioOff');
    const iconAudioOn = document.getElementById('iconAudioOn');

    btnAudio.addEventListener('click', () => {
      initAudio();
      state.audioEnabled = !state.audioEnabled;
      btnAudio.setAttribute('aria-pressed', state.audioEnabled);
      if (state.audioEnabled) {
        iconAudioOff.classList.add('hidden');
        iconAudioOn.classList.remove('hidden');
        playLuxuryChime(660);
      } else {
        iconAudioOff.classList.remove('hidden');
        iconAudioOn.classList.add('hidden');
      }
    });

    // Grand Tour Controls
    document.getElementById('btnTour').addEventListener('click', () => {
      if (state.tourActive) {
        stopGrandTour();
      } else {
        startGrandTour();
      }
    });

    document.getElementById('btnStopTour').addEventListener('click', stopGrandTour);

    // Modal Events
    document.getElementById('btnModalClose').addEventListener('click', closeModal);
    document.getElementById('modalBackdrop').addEventListener('click', closeModal);
    document.getElementById('btnModalNext').addEventListener('click', nextWonder);
    document.getElementById('btnModalPrev').addEventListener('click', prevWonder);

    // Bottom Shelf Collapse
    const btnToggleShelf = document.getElementById('btnToggleShelf');
    const bottomShelf = document.querySelector('.bottom-shelf');
    btnToggleShelf.addEventListener('click', () => {
      bottomShelf.classList.toggle('collapsed');
    });

    // Keyboard Navigation
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
        stopGrandTour();
      } else if (e.key === 'ArrowRight') {
        const overlay = document.getElementById('modalOverlay');
        if (!overlay.classList.contains('hidden')) {
          nextWonder();
        }
      } else if (e.key === 'ArrowLeft') {
        const overlay = document.getElementById('modalOverlay');
        if (!overlay.classList.contains('hidden')) {
          prevWonder();
        }
      }
    });
  }

  /* ==========================================================================
     START APPLICATION ON DOM READY
     ========================================================================== */
  window.addEventListener('DOMContentLoaded', () => {
    initMap();
    bindEvents();
  });

})();
