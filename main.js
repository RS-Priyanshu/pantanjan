// FULL DETAILS POPUP DATA
    const popupData = {
      prophetMuhammad: {
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23b7e6d4'/%3E%3Ctext x='50' y='65' font-size='44' text-anchor='middle' fill='%231d5b47'%3Eﷺ%3C/text%3E%3C/svg%3E",
        html: `<h3>Prophet Muhammad al-Mustafa (pbuh&hp)</h3>
               <p><strong>Prophet Muhammad (peace be upon him & his progeny)</strong></p>
               <p><strong>Name:</strong> Muhammad</p>
               <p><strong>Title:</strong> al-Mustafa; Rasul Allah</p>
               <p><strong>Kunya:</strong> Abu al-Qasim</p>
               <p><strong>Father:</strong> Abdullah ibn Abdul Mutallib</p>
               <p><strong>Mother:</strong> Amina bint Wahhab</p>
               <p><strong>Born:</strong> 17th Rabi' al-Awwal, Year of the Elephant/570 CE in Makkah, Hejaz region of the Arabian Peninsula</p>
               <p><strong>Died:</strong> 28th Safar, 11 AH/632 CE</p>
               <p><strong>Age at Death:</strong> 63</p>
               <p><strong>Buried:</strong> Madinah, Hejaz region of the Arabian Peninsula</p>`
      },
      fatimah: {
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23f0d9e0'/%3E%3Ctext x='50' y='65' font-size='44' text-anchor='middle' fill='%23942b5c'%3Eف%3C/text%3E%3C/svg%3E",
        html: `<h3>Sayyida Fatimah bint Muhammad (p)</h3>
               <p><strong>Sayyida Fatimah bint Muhammad (peace be upon them)</strong></p>
               <p><strong>Name:</strong> Fatimah</p>
               <p><strong>Title:</strong> al-Zahra; al-Batul (The Pure One)</p>
               <p><strong>Kunya:</strong> Umm Abiha; Umm al-A'immah (Mother of her father; Mother of the Imams)</p>
               <p><strong>Father:</strong> Muhammad ibn Abdullah (Peace be upon him and his holy progeny)</p>
               <p><strong>Mother:</strong> Khadijah bint Khuwaylid</p>
               <p><strong>Born:</strong> 20 Jumada al-Thani, 5BH or 8BH</p>
               <p><strong>Died:</strong> 13 Jumada al-Awwal, 11AH or 3 Jumada al-Thani, 11AH</p>
               <p><strong>Age of Death:</strong> 18 (Martyred after being inflicted with injuries)</p>
               <p><strong>Buried:</strong> Unknown location in Madinah al-Munawarah</p>`
      },
      imamAli: {
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23d4e6b7'/%3E%3Ctext x='50' y='65' font-size='40' text-anchor='middle' fill='%233b5e1a'%3Eع%3C/text%3E%3C/svg%3E",
        html: `<h3>IMAM ALI IBN ABI TALIB (as)</h3>
               <p><strong>Titles:</strong> Amir Al-Mumineen (Commander of the Faithful) Haydar (Brave hearted) Asadullah (Lion of God) Abu Turab (Father of Dust) Abu Yateem (Father of the Orphans)</p>
               <p><strong>Mother:</strong> Fatimah bint Asad</p><p><strong>Father:</strong> Abu Talib</p>
               <p><strong>Born:</strong> 13th Rajab, 23 BH/595 CE</p><p><strong>Place of Birth:</strong> Inside the Holy Ka'aba, Makkah</p>
               <p><strong>Kunya:</strong> Abu Al-Hassan, Abu Al-Hassanain</p><p><strong>Period of Imamate:</strong> 29 years</p>
               <p><strong>Death:</strong> 21st Ramadan, 40 AH/661 CE</p><p><strong>Age of martyrdom:</strong> 63</p><p><strong>Buried:</strong> Najaf, Iraq</p>`
      },
      imamHassan: {
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23cde6d0'/%3E%3Ctext x='50' y='65' font-size='42' text-anchor='middle' fill='%231f5b3a'%3Eح%3C/text%3E%3C/svg%3E",
        html: `<h3>IMAM AL-HASSAN (as)</h3><p><strong>Titles:</strong> Al-Mujtaba (The selected one)</p><p><strong>Mother:</strong> Fatimah bint Muhammad</p><p><strong>Father:</strong> Ali Ibn Abu Talib</p><p><strong>Born:</strong> 15th Ramadhan, 2 AH/624 CE</p><p><strong>Place of Birth:</strong> Madinah</p><p><strong>Kunya:</strong> Abu Muhammad</p><p><strong>Period of Imamate:</strong> 9 years</p><p><strong>Death:</strong> 7th Safar, 50 AH/670 CE</p><p><strong>Age of martyrdom:</strong> 48</p><p><strong>Buried:</strong> Baqi', Madinah</p>`
      },
      imamHussain: {
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23e6d0cd'/%3E%3Ctext x='50' y='65' font-size='42' text-anchor='middle' fill='%239b2b2b'%3Eح%3C/text%3E%3C/svg%3E",
        html: `<h3>IMAM AL-HUSSAIN (as)</h3><p><strong>Titles:</strong> Sayyid al-Shuhada (the Master of Martyrs)</p><p><strong>Mother:</strong> Fatimah bint Muhammad</p><p><strong>Father:</strong> Ali Ibn Abu Talib</p><p><strong>Born:</strong> 3rd Shaban, 3 AH/626 CE</p><p><strong>Place of Birth:</strong> Madinah</p><p><strong>Kunya:</strong> Aba Abd Allah</p><p><strong>Period of Imamate:</strong> 10 years</p><p><strong>Death:</strong> 10th Muharram, 61 AH/680 CE</p><p><strong>Age of martyrdom:</strong> 57</p><p><strong>Buried:</strong> Karbala, Iraq</p>`
      },
      imamSajjad: {
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23d9e6f2'/%3E%3Ctext x='50' y='65' font-size='40' text-anchor='middle' fill='%231b3b5c'%3Eز%3C/text%3E%3C/svg%3E",
        html: `<h3>IMAM AL-SAJJAD (as)</h3><p><strong>Titles:</strong> Zayn al-Abideen (Ornament of the Worshippers) Sayyid al-Sajjadeen (Master of the Prostrators)</p><p><strong>Mother:</strong> Shahrbanu</p><p><strong>Father:</strong> Hussain ibn Ali</p><p><strong>Born:</strong> 5th Shaban, 38 AH/659 CE</p><p><strong>Place of Birth:</strong> Makkah</p><p><strong>Kunya:</strong> Abu al-Hassan</p><p><strong>Period of Imamate:</strong> 10 years</p><p><strong>Death:</strong> 25th Muharram, 95 AH/713 CE</p><p><strong>Age of martyrdom:</strong> 57</p><p><strong>Buried:</strong> al-Baqi', Madinah</p>`
      },
      imamBaqir: {
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23f2e6d9'/%3E%3Ctext x='50' y='65' font-size='40' text-anchor='middle' fill='%235c4b1b'%3Eب%3C/text%3E%3C/svg%3E",
        html: `<h3>IMAM MUHAMMAD AL-BAQIR (as)</h3><p><strong>Titles:</strong> al-Baqir (Splitter of Knowledge)</p><p><strong>Mother:</strong> Fatimah bint al-Hasan</p><p><strong>Father:</strong> Ali ibn Hussain</p><p><strong>Born:</strong> 1st Rajab, 57 AH/676 CE</p><p><strong>Place of Birth:</strong> Madinah</p><p><strong>Kunya:</strong> Abu Ja'far</p><p><strong>Period of Imamate:</strong> 19 years</p><p><strong>Death:</strong> 7th Dhul-Hijjah, 114 AH/733 CE</p><p><strong>Age of martyrdom:</strong> 57</p><p><strong>Buried:</strong> al-Baqi', Madinah</p>`
      },
      imamSadiq: {
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23d9f2e0'/%3E%3Ctext x='50' y='65' font-size='40' text-anchor='middle' fill='%231b5c3b'%3Eص%3C/text%3E%3C/svg%3E",
        html: `<h3>IMAM JAFFAR AL-SADIQ (as)</h3><p><strong>Titles:</strong> Al-Sadiq (Truthful one)</p><p><strong>Mother:</strong> Ummu Farwah</p><p><strong>Father:</strong> Muhammad Al-Baqir</p><p><strong>Born:</strong> 17th Rabi' al-Awwal, 83 AH/702 CE</p><p><strong>Place of Birth:</strong> Madinah</p><p><strong>Kunya:</strong> Abu Abdullah, Abu Musa</p><p><strong>Period of Imamate:</strong> 32 years</p><p><strong>Death:</strong> 25th Shawwal, 148 AH/765 CE</p><p><strong>Age of martyrdom:</strong> 63</p><p><strong>Buried:</strong> al-Baqi', Madinah</p>`
      },
      imamKadhim: {
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23e0d9f2'/%3E%3Ctext x='50' y='65' font-size='40' text-anchor='middle' fill='%23331b5c'%3Eك%3C/text%3E%3C/svg%3E",
        html: `<h3>IMAM MUSA AL-KADHIM (as)</h3><p><strong>Titles:</strong> al-Kadhim (The Calm or Restrained); Bab al-Hawa'ij (The Door to Fulfilling One's Needs)</p><p><strong>Mother:</strong> Hamidah al-Barbariyyah</p><p><strong>Father:</strong> Ja'far al-Sadiq</p><p><strong>Born:</strong> 7th Safar, 128 AH/745 CE</p><p><strong>Place of Birth:</strong> Madinah</p><p><strong>Kunya:</strong> Abu al-Hassan</p><p><strong>Period of Imamate:</strong> 32 years</p><p><strong>Death:</strong> 25th Rajab, 183 AH/799 CE</p><p><strong>Age of martyrdom:</strong> 55</p><p><strong>Buried:</strong> Kadhmayn Baghdad, Iraq</p>`
      },
      imamRidha: {
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23f2d9e6'/%3E%3Ctext x='50' y='65' font-size='40' text-anchor='middle' fill='%235c1b4b'%3Eر%3C/text%3E%3C/svg%3E",
        html: `<h3>IMAM ALI AL-RIDHA (as)</h3><p><strong>Titles:</strong> Al-Ridha (the Pleasing One)</p><p><strong>Mother:</strong> Umm al-Baneen Najmah</p><p><strong>Father:</strong> Musa al-Kadhim</p><p><strong>Born:</strong> 11th Dhul-Qa'dah, 148 AH/765 CE</p><p><strong>Place of Birth:</strong> Madinah</p><p><strong>Kunya:</strong> Abu al-Hassan</p><p><strong>Period of Imamate:</strong> 20 years</p><p><strong>Death:</strong> 29th Safar, 203 AH/818 CE</p><p><strong>Age of martyrdom:</strong> 55</p><p><strong>Buried:</strong> Mashhad, Iran</p>`
      },
      imamJawad: {
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23e6f2d9'/%3E%3Ctext x='50' y='65' font-size='40' text-anchor='middle' fill='%234b5c1b'%3Eج%3C/text%3E%3C/svg%3E",
        html: `<h3>IMAM TAQI AL-JAWAD (as)</h3><p><strong>Titles:</strong> al-Taqi [the Pious] al-Jawad [the Generous], al-Qani' [the Content]</p><p><strong>Mother:</strong> Khaizoran</p><p><strong>Father:</strong> Ali Al-Ridha</p><p><strong>Born:</strong> 10th Rajab, 195 AH/811 CE</p><p><strong>Place of Birth:</strong> Madinah</p><p><strong>Kunya:</strong> Abu Ja'far, al-Thani (the Second); Ibn al-Ridha</p><p><strong>Period of Imamate:</strong> 17 years</p><p><strong>Death:</strong> 30th Dhil-Qa'dah, 220 AH/835 CE</p><p><strong>Age of martyrdom:</strong> 25</p><p><strong>Buried:</strong> Kadhmayn Baghdad, Iraq</p>`
      },
      imamHadi: {
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23d9f2f2'/%3E%3Ctext x='50' y='65' font-size='40' text-anchor='middle' fill='%231b5c5c'%3Eه%3C/text%3E%3C/svg%3E",
        html: `<h3>IMAM ALI AL-HADI (as)</h3><p><strong>Titles:</strong> al-Hadi [the Guide], al-Naqi [the Pure]</p><p><strong>Mother:</strong> Summana Khatun</p><p><strong>Father:</strong> Muhammad ibn Ali al-Jawad</p><p><strong>Born:</strong> 2nd Rajab, 212 AH/827 CE</p><p><strong>Place of Birth:</strong> Madinah</p><p><strong>Kunya:</strong> Abu al-Hassan</p><p><strong>Period of Imamate:</strong> 34 years</p><p><strong>Death:</strong> 3rd Rajab, 254 AH/868 CE</p><p><strong>Age of martyrdom:</strong> 42</p><p><strong>Buried:</strong> Samarra, Iraq</p>`
      },
      imamAskari: {
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23f2e6d9'/%3E%3Ctext x='50' y='65' font-size='40' text-anchor='middle' fill='%235c3b1b'%3Eع%3C/text%3E%3C/svg%3E",
        html: `<h3>IMAM HASSAN Al-ASKARI (as)</h3><p><strong>Titles:</strong> al-Askari</p><p><strong>Mother:</strong> Hudayth / Sousan / Sulayl</p><p><strong>Father:</strong> Ali ibn Muhammad al-Hadi al-Naqi</p><p><strong>Born:</strong> 8th Rabi' al-Thani, 232 AH/846 CE</p><p><strong>Place of Birth:</strong> Madinah</p><p><strong>Kunya:</strong> Abu Muhammad, Ibn al-Ridha</p><p><strong>Period of Imamate:</strong> 6 years</p><p><strong>Death:</strong> 8th, Rabi' al-Awwal, 260 AH/874 CE</p><p><strong>Age of martyrdom:</strong> 28</p><p><strong>Buried:</strong> Samarra, Iraq</p>`
      },
      imamMahdi: {
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23d9d9f2'/%3E%3Ctext x='50' y='65' font-size='40' text-anchor='middle' fill='%231b1b5c'%3Eم%3C/text%3E%3C/svg%3E",
        html: `<h3>IMAM AL-MAHDI (aj)</h3><p><strong>Titles:</strong> al-Mahdi (the guided), al-Hujjat ibn al-Hassan, al-Muntadhar (the Awaited)</p><p><strong>Mother:</strong> Narjis Khatoun</p><p><strong>Father:</strong> Hassan ibn Ali (al-Askari)</p><p><strong>Born:</strong> 15th Sha'ban, 255 AH/869 CE</p><p><strong>Place of Birth:</strong> Samarra, Iraq</p><p><strong>Kunya:</strong> Abu Salih (The Most Pious One)</p><p><strong>Period of Imamate:</strong> Continuous</p><p><strong>Occultation:</strong> 329 AH</p>`
      }
    };

    function openPopup(id) {
      const data = popupData[id];
      if (!data) return;
      document.getElementById('modalImage').src = data.img;
      document.getElementById('modalDetails').innerHTML = data.html;
      document.getElementById('personModal').style.display = 'flex';
    }

    function closePopup() {
      document.getElementById('personModal').style.display = 'none';
    }

    document.getElementById('personModal').addEventListener('click', function(e) {
      if (e.target === this) closePopup();
    });

    // cursor glow
    const cursor = document.getElementById('cursorGlow');
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    // mobile menu toggle
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('navLinks');
    toggle.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 800) nav.style.display = 'flex';
      else nav.style.display = 'none';
    });