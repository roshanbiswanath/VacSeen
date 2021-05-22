//
let currentDistrict = ""
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '-' + mm + '-' + yyyy;
console.log(today)
duplicatesFound = {
  "khurda" : "Khordha",
  "Angul" : "Anugul"
}

centreLoc = {
  "585995" : null ,
  "565506" : [19.588143, 84.754936],
  "504072" : [19.311590, 84.811157],
  "503662" : [19.605550, 84.671382],
  "504899" : [19.644094, 84.576229],
  "698621" : [19.302164, 84.821712],
  "697613" : [19.313145, 84.785679],
  "553653" : [19.312776, 84.793778],
  "697558" : [19.313892, 84.782884],
  "666992" : [19.450653, 84.596321],
  "698586" : [19.298557, 84.791995],
  "566594" : [19.882471, 84.637664],
  "565505" : [19.285446, 84.540090],
  "663664" : [19.533453, 84.726606],
  "570165" : [19.449684, 84.646507],
  "670932" : [19.967567, 84.775006],
  "504587" : [19.330554, 84.923239],
  "656307" : [19.088930, 84.643146],
  "608531" : [19.387447, 85.051897],
  "617097" : [19.476938, 84.739919],
  "569646" : [19.130833, 84.574839],
  "698644" : [19.308489, 84.794185],
  "553732" : [19.200585, 84.615165]
}

districtIds = {
  'Adilabad': 582, 'Agar': 320, 'Agatti Island': 796, 'Agra': 622, 'Ahmedabad': 154, 'Ahmedabad Corporation': 770, 'Ahmednagar': 391, 'Aizawl East': 425, 'Aizawl West': 426, 'Ajmer': 507, 'Akola': 364, 'Alappuzha': 301, 'Aligarh': 623, 'Alipurduar District': 710, 'Alirajpur': 357, 'Almora': 704, 'Alwar': 512, 'Ambala': 193, 'Ambedkar Nagar': 625, 'Amethi': 626, 'Amravati': 366, 'Amreli': 174, 'Amritsar': 485, 'Amroha': 627, 'Anand': 179, 'Anantapur': 9, 'Anantnag': 224, 'Anugul': 445, 'Anjaw': 22, 'Anuppur': 334, 'Aranthangi': 779, 'Araria': 74, 'Aravalli': 158, 'Ariyalur': 555, 'Arwal': 78, 'Ashoknagar': 354, 'Attur': 578, 'Auraiya': 628, 'Aurangabad': 77,
  'Aurangabad': 397, 'Ayodhya': 646, 'Azamgarh': 629, 'BBMP': 294, 'Badaun': 630, 'Bagalkot': 270, 'Bageshwar': 707, 'Baghpat': 631, 'Bahraich': 632, 'Baksa': 46, 'Balaghat': 338, 'Balangir': 448, 'Balarampur': 633, 'Balasore': 447, 'Ballia': 634, 'Balod': 110, 'Baloda bazar': 111, 'Balrampur': 112, 'Banaskantha': 159, 'Banda': 635, 'Bandipore': 223, 'Bangalore Rural': 276, 'Bangalore Urban': 265, 'Banka': 83, 'Bankura': 711, 'Banswara': 519, 'Barabanki': 636, 'Baramulla': 225, 'Baran': 516,
  'Bareilly': 637, 'Bargarh': 472, 'Barmer': 528, 'Barnala': 483, 'Barpeta': 47, 'Barwani': 343, 'Basirhat HD (North 24 Parganas)': 712, 'Bastar': 113, 'Basti': 638, 'Bathinda': 493, 'Beed': 384, 'Begusarai': 98, 'Belgaum': 264, 'Bellary': 274, 'Bemetara': 114, 'Betul': 362, 'Bhadohi': 687, 'Bhadradri Kothagudem': 583, 'Bhadrak': 454, 'Bhagalpur': 82, 'Bhandara': 370, 'Bharatpur': 508, 'Bharuch': 180, 'Bhavnagar': 175, 'Bhavnagar Corporation': 771, 'Bhilwara': 523, 'Bhind': 351, 'Bhiwani': 200,
  'Bhojpur': 99, 'Bhopal': 312, 'Bidar': 272, 'Bijapur': 115, 'Bijnour': 639, 'Bikaner': 501, 'Bilaspur': 219, 'Birbhum': 713, 'Bishnupur': 398, 'Bishnupur HD (Bankura)': 714, 'Biswanath': 765, 'Bokaro': 242, 'Bongaigaon': 57, 'Botad': 176, 'Boudh': 468, 'Budgam': 229, 'Bulandshahr': 640, 'Buldhana': 367, 'Bundi': 514, 'Burhanpur':
    342, 'Buxar': 100, 'COOCHBEHAR': 783, 'Cachar': 66, 'Central Delhi': 141, 'Chamarajanagar': 271, 'Chamba': 214, 'Chamoli': 699, 'Champawat': 708, 'Champhai': 429, 'Chandauli': 641, 'Chandel': 399, 'Chandigarh': 108, 'Chandrapur': 380, 'Changlang': 20, 'Charaideo': 766, 'Charkhi Dadri': 201, 'Chatra': 245, 'Chengalpet': 565, 'Chennai': 571, 'Cheyyar': 778, 'Chhatarpur': 328, 'Chhindwara': 337, 'Chhotaudepur': 181, 'Chikamagalur': 273, 'Chikkaballapur': 291, 'Chirang': 58, 'Chitradurga': 268, 'Chitrakoot': 642, 'Chittoor': 10, 'Chittorgarh': 521, 'Churachandpur': 400, 'Churu': 530, 'Coimbatore': 539, 'Cooch Behar': 715, 'Cuddalore': 547, 'Cuttack': 457, 'Dadra and Nagar Haveli': 137, 'Dahod': 182, 'Dakshin Dinajpur': 716, 'Dakshina Kannada': 269, 'Damoh': 327, 'Dang': 163, 'Dantewada': 117, 'Darbhanga': 94, 'Darjeeling': 717, 'Darrang': 48, 'Datia': 350, 'Dausa': 511, 'Davanagere': 275, 'Dehradun': 697, 'Deogarh': 473, 'Deoghar': 253, 'Deoria': 643, 'Devbhumi Dwaraka': 168, 'Dewas':
    324, 'Dhalai': 614, 'Dhamtari': 118, 'Dhanbad': 257, 'Dhar': 341, 'Dharmapuri': 566, 'Dharwad': 278, 'Dhemaji': 62, 'Dhenkanal': 458, 'Dholpur': 524, 'Dhubri': 59, 'Dhule': 388, 'Diamond Harbor HD (S 24 Parganas)': 718, 'Dibang Valley': 25, 'Dibrugarh': 43, 'Dima Hasao': 67, 'Dimapur': 434, 'Dindigul': 556, 'Dindori': 336, 'Doda': 232, 'Dumka': 258, 'Dungarpur': 520, 'Durg': 119, 'East Bardhaman': 719, 'East Champaran': 105, 'East Delhi': 145, 'East Garo Hills': 424, 'East Godavari': 11, 'East Jaintia Hills': 418, 'East Kameng': 23, 'East Khasi Hills': 414, 'East Siang': 42, 'East Sikkim': 535, 'East Singhbhum': 247, 'Ernakulam': 307, 'Erode': 563, 'Etah': 644, 'Etawah': 645, 'Faridabad': 199, 'Faridkot': 499, 'Farrukhabad': 647, 'Fatehabad': 196, 'Fatehgarh Sahib': 484, 'Fatehpur': 648, 'Fazilka': 487, 'Ferozpur': 480, 'Firozabad': 649, 'Gadag': 280, 'Gadchiroli': 379, 'Gajapati': 467, 'Ganderbal': 228, 'Gandhinagar': 153, 'Gandhinagar Corporation': 772, 'Ganjam': 449, 'Garhwa': 243, 'Gariaband': 120, 'Gaurela Pendra Marwahi': 136, 'Gautam Buddha Nagar': 650, 'Gaya': 79, 'Ghaziabad': 651, 'Ghazipur': 652, 'Gir Somnath': 177, 'Giridih': 256, 'Goalpara': 60, 'Godda': 262, 'Golaghat': 53, 'Gomati': 615, 'Gonda': 653, 'Gondia': 378, 'Gopalganj': 104, 'Gorakhpur': 654, 'Gulbarga': 267, 'Gumla': 251, 'Guna':
    348, 'Guntur': 5, 'Gurdaspur': 489, 'Gurgaon': 188, 'Gwalior': 313, 'Hailakandi': 68, 'Hamirpur': 655, 'Hanumangarh': 517, 'Hapur': 656, 'Harda': 361, 'Hardoi': 657,
  'Haridwar': 702, 'Hassan': 289, 'Hathras': 658, 'Haveri': 279, 'Hazaribagh': 255, 'Hingoli': 386, 'Hisar': 191, 'Hojai': 764, 'Hoogly': 720, 'Hoshangabad': 360, 'Hoshiarpur': 481, 'Howrah': 721, 'Hyderabad': 581, 'Idukki': 306, 'Imphal East': 401, 'Imphal West': 402, 'Indore': 314, 'Itanagar Capital Complex': 17, 'Jabalpur': 315,
  'Jagatsinghpur': 459, 'Jagtial': 584, 'Jaipur I': 505, 'Jaipur II': 506, 'Jaisalmer': 527, 'Jajpur': 460, 'Jalandhar': 492, 'Jalaun': 659, 'Jalgaon': 390, 'Jalna': 396, 'Jalore': 533, 'Jalpaiguri': 722, 'Jammu': 230, 'Jamnagar': 169, 'Jamnagar Corporation': 773, 'Jamtara': 259, 'Jamui': 107, 'Jangaon': 585, 'Janjgir-Champa': 121,
  'Jashpur': 122, 'Jaunpur': 660, 'Jayashankar Bhupalpally': 586, 'Jehanabad': 91, 'Jhabua': 340, 'Jhajjar': 189, 'Jhalawar': 515, 'Jhansi': 661, 'Jhargram': 723, 'Jharsuguda': 474, 'Jhunjhunu': 510, 'Jind': 204, 'Jiribam': 410, 'Jodhpur': 502, 'Jogulamba Gadwal': 587, 'Jorhat': 54, 'Junagadh': 178, 'Junagadh Corporation': 774, 'Kaimur': 80, 'Kaithal': 190, 'Kakching': 413, 'Kalahandi': 464, 'Kalimpong': 724, 'Kallakurichi': 552, 'Kamareddy': 588, 'Kamjong': 409, 'Kamle': 24, 'Kamrup Metropolitan': 49, 'Kamrup Rural': 50, 'Kanchipuram': 557, 'Kandhamal': 450, 'Kangpokpi': 408, 'Kangra': 213, 'Kanker': 123, 'Kannauj': 662, 'Kannur': 297, 'Kanpur Dehat': 663,
  'Kanpur Nagar': 664, 'Kanyakumari': 544, 'Kapurthala': 479, 'Karaikal': 476, 'Karauli': 525, 'Karbi-Anglong': 51, 'Kargil': 309, 'Karimganj': 69, 'Karimnagar': 589, 'Karnal': 203, 'Karur': 559, 'Kasaragod': 295, 'Kasganj': 665, 'Kathua': 234, 'Katihar': 75, 'Katni': 353, 'Kaushambi': 666, 'Kawardha': 135, 'Kendrapara': 461, 'Kendujhar': 455, 'Khagaria': 101, 'Khammam': 590, 'Khandwa': 339, 'Khargone': 344, 'Kheda': 156, 'Khowai': 616, 'Khunti': 252,'Khordha' :446, 'Kinnaur': 216, 'Kiphire': 444, 'Kishanganj': 76, 'Kishtwar': 231, 'Kodagu': 283, 'Koderma': 241, 'Kohima': 441, 'Kokrajhar': 61, 'Kolar': 277, 'Kolasib': 428, 'Kolhapur': 371, 'Kolkata': 725, 'Kollam': 298, 'Kondagaon': 124, 'Koppal': 282, 'Koraput': 451, 'Korba': 125, 'Koriya': 126, 'Kota': 503, 'Kottayam': 304, 'Kovilpatti': 780, 'Kozhikode': 305, 'Kra Daadi': 27, 'Krishna': 4, 'Krishnagiri': 562, 'Kulgam': 221, 'Kullu': 211, 'Kumuram Bheem': 591, 'Kupwara': 226, 'Kurnool': 7, 'Kurukshetra': 186, 'Kurung Kumey': 21, 'Kushinagar': 667, 'Kutch': 170, 'Lahaul Spiti': 210, 'Lakhimpur': 63, 'Lakhimpur Kheri': 668, 'Lakhisarai': 84, 'Lakshadweep': 311, 'Lalitpur': 669, 'Latehar': 244, 'Latur': 383, 'Lawngtlai': 432, 'Leh': 310, 'Lepa Rada': 33, 'Lohardaga': 250, 'Lohit': 29, 'Longding': 40, 'Longleng': 438, 'Lower Dibang Valley': 31, 'Lower Siang': 18, 'Lower Subansiri': 32, 'Lucknow': 670, 'Ludhiana': 488, 'Lunglei': 431, 'Madhepura': 70, 'Madhubani': 95, 'Madurai': 540, 'Mahabubabad': 592, 'Mahabubnagar': 593,
  'Maharajganj': 671, 'Mahasamund': 127, 'Mahe': 477, 'Mahendragarh': 206, 'Mahisagar': 183, 'Mahoba': 672, 'Mainpuri': 673, 'Majuli': 767, 'Malappuram': 302, 'Malda':
    726, 'Malkangiri': 469, 'Mamit': 427, 'Mancherial': 594, 'Mandi': 215, 'Mandla': 335, 'Mandsaur': 319, 'Mandya': 290, 'Mansa': 482, 'Mathura': 674, 'Mau': 675, 'Mayurbhanj': 456, 'Medak': 595, 'Medchal': 596, 'Meerut': 676, 'Mehsana': 160, 'Mirzapur': 677, 'Moga': 491, 'Mokokchung': 437, 'Mon': 439, 'Moradabad': 678, 'Morbi': 171, 'Morena': 347, 'Morigaon': 55, 'Mulugu': 612, 'Mumbai': 395, 'Mungeli': 128, 'Munger': 85, 'Murshidabad': 727, 'Muzaffarnagar': 679, 'Muzaffarpur': 86, 'Mysore': 266, 'Nabarangpur': 470, 'Nadia': 728, 'Nagaon': 56, 'Nagapattinam': 576, 'Nagarkurnool': 597, 'Nagaur': 532, 'Nagpur': 365, 'Nainital': 709, 'Nalanda': 90, 'Nalbari': 52, 'Nalgonda': 598, 'Namakkal': 558, 'Namsai': 36, 'Nanded': 382, 'Nandigram HD (East Medinipore)': 729, 'Nandurbar': 387, 'Narayanpet': 613, 'Narayanpur': 129, 'Narmada': 184, 'Narsinghpur': 352, 'Nashik': 389, 'Navsari': 164, 'Nawada': 92, 'Nayagarh': 462, 'Neemuch': 323, 'New Delhi': 140, 'Nicobar': 3, 'Nilgiris': 577, 'Nirmal': 599, 'Nizamabad': 600, 'Noney': 412, 'North 24 Parganas': 730, 'North Delhi': 146, 'North East Delhi': 147, 'North Garo Hills': 423, 'North Goa': 151, 'North Sikkim': 537, 'North Tripura': 617, 'North West Delhi': 143, 'North and Middle Andaman': 1, 'Nuapada': 465, 'Nuh': 205, 'Osmanabad': 381, 'Pakke Kessang': 19, 'Pakur': 261, 'Palakkad': 308, 'Palamu': 246, 'Palani': 564, 'Palghar': 394, 'Pali': 529, 'Palwal': 207, 'Panchkula': 187, 'Panchmahal': 185, 'Panipat': 195, 'Panna': 326,
  'Papum Pare': 39, 'Paramakudi': 573, 'Parbhani': 385, 'Paschim Medinipore': 731, 'Patan': 161, 'Pathanamthitta': 300, 'Pathankot': 486, 'Patiala': 494, 'Patna': 97, 'Pauri Garhwal': 698, 'Peddapalli': 601, 'Perambalur': 570, 'Peren': 435, 'Phek': 443, 'Pherzawl': 411, 'Pilibhit': 680, 'Pithoragarh': 706, 'Poonamallee': 575, 'Poonch': 238, 'Porbandar': 172, 'Prakasam': 12, 'Pratapgarh': 682, 'Prayagraj': 624, 'Puducherry': 475, 'Pudukkottai': 546, 'Pulwama': 227, 'Pune': 363, 'Purba Medinipore': 732,
  'Puri': 463, 'Purnia': 73, 'Purulia': 733, 'Raebareli': 681, 'Raichur': 284, 'Raigad': 393, 'Raigarh': 130, 'Raipur': 109, 'Raisen': 359, 'Rajanna Sircilla': 602, 'Rajgarh': 358, 'Rajkot': 173, 'Rajkot Corporation': 775, 'Rajnandgaon': 131, 'Rajouri': 237, 'Rajsamand': 518, 'Ramanagara': 292, 'Ramanathapuram': 567, 'Ramban': 235,
  'Ramgarh': 254, 'Rampur': 683, 'Rampurhat HD (Birbhum)': 734, 'Ranchi': 240, 'Rangareddy': 603, 'Ranipet': 781, 'Ratlam': 322, 'Ratnagiri': 372, 'Rayagada': 471, 'Reasi': 239, 'Rewa': 316, 'Rewari': 202, 'Ri-Bhoi': 417, 'Rohtak': 192, 'Rohtas': 81, 'Rudraprayag': 700, 'Rup Nagar': 497, 'SAS Nagar': 496, 'SBS Nagar': 500, 'Sabarkantha': 162, 'Sagar': 317, 'Saharanpur': 684, 'Saharsa': 71, 'Sahebganj': 260, 'Salem': 545, 'Samastipur': 96, 'Samba': 236, 'Sambalpur': 452, 'Sambhal': 685, 'Sangareddy': 604, 'Sangli': 373, 'Sangrur': 498, 'Sant Kabir Nagar': 686, 'Saran': 102, 'Satara': 376, 'Satna': 333, 'Sawai Madhopur': 534, 'Sehore': 356, 'Senapati': 403, 'Seoni': 349, 'Sepahijala': 618, 'Seraikela Kharsawan': 248, 'Serchhip': 430, 'Shahdara': 148, 'Shahdol': 332, 'Shahjahanpur': 688, 'Shajapur': 321, 'Shamli': 689, 'Sheikhpura': 93, 'Sheohar': 87, 'Sheopur': 346, 'Shi Yomi': 35, 'Shimla': 208, 'Shimoga': 287, 'Shivpuri': 345, 'Shopian': 222, 'Shravasti': 690, 'Siaha': 433, 'Siang':
    37, 'Siddharthnagar': 691, 'Siddipet': 605, 'Sidhi': 331, 'Sikar': 513, 'Simdega': 249, 'Sindhudurg': 374, 'Singrauli': 330, 'Sirmaur': 212, 'Sirohi': 531, 'Sirsa': 194, 'Sitamarhi': 88, 'Sitapur': 692, 'Sivaganga': 561, 'Sivakasi': 580, 'Sivasagar': 44, 'Siwan': 103, 'Solan': 209, 'Solapur': 375, 'Sonbhadra': 693, 'Sonipat': 198, 'Sonitpur': 64, 'South 24 Parganas': 735, 'South Andaman': 2, 'South Delhi': 149, 'South East Delhi': 144, 'South Garo Hills': 421, 'South Goa': 152,
  'South Salmara Mankachar': 768, 'South Sikkim': 538, 'South Tripura': 619, 'South West Delhi': 150, 'South West Garo Hills': 422, 'South West Khasi Hills': 415, 'Sri Ganganagar': 509, 'Sri Muktsar Sahib': 490, 'Sri Potti Sriramulu Nellore': 13, 'Srikakulam': 14, 'Srinagar': 220, 'Subarnapur': 466, 'Sukma': 132, 'Sultanpur': 694, 'Sundargarh': 453, 'Supaul': 72, 'Surajpur': 133, 'Surat': 165, 'Surat Corporation': 776, 'Surendranagar': 157, 'Surguja': 134, 'Suryapet': 606, 'Tamenglong': 404, 'Tapi': 166, 'Tarn Taran': 495, 'Tawang': 30, 'Tehri Garhwal': 701, 'Tengnoupal': 407, 'Tenkasi': 551, 'Thane': 392, 'Thanjavur': 541, 'Theni': 569, 'Thiruvananthapuram': 296, 'Thoothukudi (Tuticorin)': 554, 'Thoubal': 405, 'Thrissur': 303, 'Tikamgarh': 325, 'Tinsukia': 45, 'Tirap': 26, 'Tiruchirappalli': 560, 'Tirunelveli': 548, 'Tirupattur': 550, 'Tiruppur': 568, 'Tiruvallur': 572, 'Tiruvannamalai': 553, 'Tiruvarur': 574, 'Tonk': 526, 'Tuensang': 440, 'Tumkur': 288, 'Udaipur': 504, 'Udalguri': 65, 'Udham Singh Nagar': 705, 'Udhampur': 233, 'Udupi': 286, 'Ujjain': 318, 'Ukhrul': 406, 'Umaria': 329, 'Una': 218, 'Unakoti': 620, 'Unnao': 695, 'Upper Siang': 34, 'Upper Subansiri': 41, 'Uttar Dinajpur': 736, 'Uttar Kannada': 281, 'Uttarkashi': 703, 'Vadodara': 155, 'Vadodara Corporation': 777, 'Vaishali': 89, 'Valsad': 167, 'Varanasi': 696, 'Vellore': 543, 'Vidisha': 355, 'Vijayapura': 293, 'Vikarabad': 607, 'Viluppuram': 542, 'Virudhunagar': 549, 'Visakhapatnam': 8, 'Vizianagaram': 15, 'Wanaparthy': 608, 'Warangal(Rural)': 609, 'Warangal(Urban)': 610, 'Wardha': 377, 'Washim': 369, 'Wayanad': 299, 'West Bardhaman': 737, 'West Champaran': 106, 'West Delhi': 142, 'West Garo Hills': 420, 'West Godavari': 16, 'West Jaintia Hills': 416, 'West Kameng': 28, 'West Karbi Anglong': 769, 'West Khasi Hills': 419, 'West Siang': 38, 'West Sikkim': 536, 'West Singhbhum': 263, 'West Tripura': 621, 'Wokha': 436, 'YSR District, Kadapa (Cuddapah)': 6, 'Yadadri Bhuvanagiri': 611, 'Yadgir': 285, 'Yamunanagar': 197, 'Yanam': 478, 'Yavatmal': 368, 'Zunheboto': 442
}
//districtIds = {
  //"Ganjam": 449,
  //"Nicobar": 3,
  //"North and Middle Andaman": 1,
  //"South Andaman": 2,

//}


mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zaGFuYmlzd2EiLCJhIjoiY2tscDkzcTRuMDZ1dDJvcno4N2x5cTBndCJ9.TTXt2BREv0lGoSH2b-02Yg';

navigator.geolocation.getCurrentPosition(successlocation, errorlocation, { enableHighAccuracy: true })

document.getElementById("map").style.top = document.getElementById("navbar").offsetHeight.toString() + "px"
let mystyle = "mapbox://styles/roshanbiswa/cklpb2r6i4rd417np60ntdnrz"
var map = new mapboxgl.Map({
  container: 'map',
  center: [84.811423, 19.307343],
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 15
});
map.addControl(

  new mapboxgl.NavigationControl()
);

map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: false,
    fitBoundsOptions: {
      zoom: 16
    }
  }), "bottom-right")


async function successlocation(position) {
  getMapData()
  setupmap([position.coords.longitude, position.coords.latitude], 15)
}

async function getDistrict(lat, long) {
  let dataFetched = await fetch("https://nominatim.openstreetmap.org/reverse?format=json&lat=" + lat + "&lon=" + long + "&zoom=6&addressdetails=1")
  let jsonData = await dataFetched.json()
  currentDistrict = jsonData["address"]["state_district"]
  return jsonData["address"]["state_district"]
}

async function getMapData() {
  let center = map.getCenter()
  let district = await getDistrict(center.lat, center.lng)
  let id = districtIds[district]
  apiSetuData = await apiSetu(id,today)
  console.log(await apiSetuData)
  return await apiSetuData
}

async function processData(){
  let rawData = await getMapData()
  for (const session in rawData["sessions"]){
    console.log(session)
      locList = centreLoc[rawData["sessions"][session]["center_id"]]
      if (typeof locList == "undefined"){
        console.log(locList)
        continue
      }
      var marker1 = new mapboxgl.Marker().setLngLat([locList[1],locList[0]]).addTo(map);

      //
   // }
    
    //console.log("Added")
  }
  //var marker1 = new mapboxgl.Marker()
//.setLngLat([12.554729, 55.70651])
//.addTo(map);
}



async function updateMap(){

}

async function apiSetu(id, date) {
  //https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=449&date=21-05-2021
  let cowinData = await fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=" + id + "&date=" + date)
  let jsonCowinData = await cowinData.json()
  return jsonCowinData

}

function errorlocation() {
  setupmap([84.811423, 19.307343], 15)
}

function setupmap(center, zoom) {
  map.setCenter(center)
  map.setZoom(zoom)
}

map.on('load', async function addingdata() {
  let x = 3
})

async function changedata() {
  let ref = firebase.database().ref("mapdata/" + selectmain.value);
  const snapshot = await ref.once('value');
  console.log(snapshot.val())
  map.getSource('demodata').setData(snapshot.val());
}

+
map.on('move', function (e) {
  let center = map.getCenter()
  console.log(`Current Map Center: ${map.getCenter()}`);
  let district = getDistrict(center.lat,center.lng)
  console.log(district)
  if (district != currentDistrict){
    processData()
  }
  //marker.setLngLat(map.getCenter());
});