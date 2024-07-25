const dataSet = [
    [
        {
            id: 1,
            question: "What is the capital of India?",
            options: [
                { text: "Mumbai", correct: false },
                { text: "Kolkata", correct: false },
                { text: "New Delhi", correct: true },
                { text: "Chennai", correct: false },
            ],
        },
        {
            id: 2,
            question: "Which river is considered the holiest in India?",
            options: [
                { text: "Ganga", correct: true },
                { text: "Yamuna", correct: false },
                { text: "Godavari", correct: false },
                { text: "Narmada", correct: false },
            ],
        },
        {
            id: 3,
            question: "Who is known as the Father of the Nation in India?",
            options: [
                { text: "Jawaharlal Nehru", correct: false },
                { text: "Subhas Chandra Bose", correct: false },
                { text: "Mahatma Gandhi", correct: true },
                { text: "Bhagat Singh", correct: false },
            ],
        },
        {
            id: 4,
            question: "What is the national animal of India?",
            options: [
                { text: "Lion", correct: false },
                { text: "Tiger", correct: true },
                { text: "Elephant", correct: false },
                { text: "Peacock", correct: false },
            ],
        },
        {
            id: 5,
            question: "Which Indian state is known as the 'Land of Five Rivers'?",
            options: [
                { text: "Rajasthan", correct: false },
                { text: "Punjab", correct: true },
                { text: "Haryana", correct: false },
                { text: "Gujarat", correct: false },
            ],
        },
        {
            id: 6,
            question: "Who was the first Prime Minister of India?",
            options: [
                { text: "Indira Gandhi", correct: false },
                { text: "Rajendra Prasad", correct: false },
                { text: "Jawaharlal Nehru", correct: true },
                { text: "Sardar Vallabhbhai Patel", correct: false },
            ],
        },
        {
            id: 7,
            question: "Which monument is also known as the 'Symbol of Love'?",
            options: [
                { text: "Qutub Minar", correct: false },
                { text: "India Gate", correct: false },
                { text: "Taj Mahal", correct: true },
                { text: "Red Fort", correct: false },
            ],
        },
        {
            id: 8,
            question: "In which year did India gain independence?",
            options: [
                { text: "1945", correct: false },
                { text: "1947", correct: true },
                { text: "1950", correct: false },
                { text: "1952", correct: false },
            ],
        },
        {
            id: 9,
            question: "Which Indian scientist is known as the 'Missile Man of India'?",
            options: [
                { text: "C.V. Raman", correct: false },
                { text: "Homi J. Bhabha", correct: false },
                { text: "A.P.J. Abdul Kalam", correct: true },
                { text: "Vikram Sarabhai", correct: false },
            ],
        },
        {
            id: 10,
            question: "Which city is known as the 'Silicon Valley of India'?",
            options: [
                { text: "Hyderabad", correct: false },
                { text: "Chennai", correct: false },
                { text: "Bengaluru", correct: true },
                { text: "Pune", correct: false },
            ],
        },
        {
            id: 11,
            question: "What is the highest civilian award in India?",
            options: [
                { text: "Padma Shri", correct: false },
                { text: "Padma Bhushan", correct: false },
                { text: "Padma Vibhushan", correct: false },
                { text: "Bharat Ratna", correct: true },
            ],
        },
        {
            id: 12,
            question: "Who wrote the Indian national anthem?",
            options: [
                { text: "Rabindranath Tagore", correct: true },
                { text: "Bankim Chandra Chatterjee", correct: false },
                { text: "Sarojini Naidu", correct: false },
                { text: "Allama Iqbal", correct: false },
            ],
        },
        {
            id: 13,
            question: "Which Indian state has the highest population?",
            options: [
                { text: "Maharashtra", correct: false },
                { text: "West Bengal", correct: false },
                { text: "Uttar Pradesh", correct: true },
                { text: "Bihar", correct: false },
            ],
        },
        {
            id: 14,
            question: "Which Indian festival is known as the 'Festival of Lights'?",
            options: [
                { text: "Holi", correct: false },
                { text: "Diwali", correct: true },
                { text: "Dussehra", correct: false },
                { text: "Navratri", correct: false },
            ],
        },
        {
            id: 15,
            question: "Which Indian state is known as the 'Spice Garden of India'?",
            options: [
                { text: "Tamil Nadu", correct: false },
                { text: "Kerala", correct: true },
                { text: "Karnataka", correct: false },
                { text: "Andhra Pradesh", correct: false },
            ],
        },
    ],
    [
        {
            id: 1,
            question: "What is the national flower of India?",
            options: [
                { text: "Rose", correct: false },
                { text: "Lotus", correct: true },
                { text: "Marigold", correct: false },
                { text: "Sunflower", correct: false },
            ],
        },
        {
            id: 2,
            question: "Which state is known as the 'Fruit Bowl of India'?",
            options: [
                { text: "Kerala", correct: false },
                { text: "Himachal Pradesh", correct: true },
                { text: "Punjab", correct: false },
                { text: "Maharashtra", correct: false },
            ],
        },
        {
            id: 3,
            question: "Which Mughal emperor built the Jama Masjid in Delhi?",
            options: [
                { text: "Akbar", correct: false },
                { text: "Shah Jahan", correct: true },
                { text: "Aurangzeb", correct: false },
                { text: "Babur", correct: false },
            ],
        },
        {
            id: 4,
            question: "What is the largest state in India by area?",
            options: [
                { text: "Maharashtra", correct: false },
                { text: "Rajasthan", correct: true },
                { text: "Uttar Pradesh", correct: false },
                { text: "Madhya Pradesh", correct: false },
            ],
        },
        {
            id: 5,
            question: "Who is the author of the book 'Wings of Fire'?",
            options: [
                { text: "A.P.J. Abdul Kalam", correct: true },
                { text: "Chetan Bhagat", correct: false },
                { text: "Arundhati Roy", correct: false },
                { text: "Vikram Seth", correct: false },
            ],
        },
        {
            id: 6,
            question: "Which Indian state is famous for the dance form 'Kathakali'?",
            options: [
                { text: "Tamil Nadu", correct: false },
                { text: "Kerala", correct: true },
                { text: "Karnataka", correct: false },
                { text: "Andhra Pradesh", correct: false },
            ],
        },
        {
            id: 7,
            question: "Who was the first woman Prime Minister of India?",
            options: [
                { text: "Indira Gandhi", correct: true },
                { text: "Pratibha Patil", correct: false },
                { text: "Sushma Swaraj", correct: false },
                { text: "Sonia Gandhi", correct: false },
            ],
        },
        {
            id: 8,
            question: "Which state is the largest producer of coffee in India?",
            options: [
                { text: "Tamil Nadu", correct: false },
                { text: "Kerala", correct: false },
                { text: "Karnataka", correct: true },
                { text: "Andhra Pradesh", correct: false },
            ],
        },
        {
            id: 9,
            question: "What is the official language of the Indian state of Nagaland?",
            options: [
                { text: "Hindi", correct: false },
                { text: "English", correct: true },
                { text: "Assamese", correct: false },
                { text: "Nagamese", correct: false },
            ],
        },
        {
            id: 10,
            question: "Which Indian state has the highest literacy rate?",
            options: [
                { text: "Tamil Nadu", correct: false },
                { text: "Kerala", correct: true },
                { text: "Maharashtra", correct: false },
                { text: "Goa", correct: false },
            ],
        },
        {
            id: 11,
            question: "Who was the first Indian to win a Nobel Prize?",
            options: [
                { text: "C.V. Raman", correct: false },
                { text: "Rabindranath Tagore", correct: true },
                { text: "Mother Teresa", correct: false },
                { text: "Amartya Sen", correct: false },
            ],
        },
        {
            id: 12,
            question: "Which is the largest dam in India?",
            options: [
                { text: "Tehri Dam", correct: true },
                { text: "Bhakra Nangal Dam", correct: false },
                { text: "Sardar Sarovar Dam", correct: false },
                { text: "Hirakud Dam", correct: false },
            ],
        },
        {
            id: 13,
            question: "Which state in India is known as the 'Land of Rising Sun'?",
            options: [
                { text: "Assam", correct: false },
                { text: "Arunachal Pradesh", correct: true },
                { text: "Manipur", correct: false },
                { text: "Sikkim", correct: false },
            ],
        },
        {
            id: 14,
            question: "Who is the first Indian woman to win an Olympic medal?",
            options: [
                { text: "Saina Nehwal", correct: false },
                { text: "P.T. Usha", correct: false },
                { text: "Karnam Malleswari", correct: true },
                { text: "Mary Kom", correct: false },
            ],
        },
        {
            id: 15,
            question: "Which Indian state is known as the 'Soya State'?",
            options: [
                { text: "Maharashtra", correct: false },
                { text: "Uttar Pradesh", correct: false },
                { text: "Madhya Pradesh", correct: true },
                { text: "Gujarat", correct: false },
            ],
        },
    ],
    [
        {
            id: 1,
            question: "What is the national bird of India?",
            options: [
                { text: "Sparrow", correct: false },
                { text: "Eagle", correct: false },
                { text: "Peacock", correct: true },
                { text: "Parrot", correct: false },
            ],
        },
        {
            id: 2,
            question: "Which city is known as the 'Pink City' in India?",
            options: [
                { text: "Jaipur", correct: true },
                { text: "Jodhpur", correct: false },
                { text: "Udaipur", correct: false },
                { text: "Bikaner", correct: false },
            ],
        },
        {
            id: 3,
            question: "Who was the first President of India?",
            options: [
                { text: "Jawaharlal Nehru", correct: false },
                { text: "Mahatma Gandhi", correct: false },
                { text: "Rajendra Prasad", correct: true },
                { text: "Sardar Vallabhbhai Patel", correct: false },
            ],
        },
        {
            id: 4,
            question: "Which state is known as the 'Tea Garden of India'?",
            options: [
                { text: "West Bengal", correct: false },
                { text: "Assam", correct: true },
                { text: "Kerala", correct: false },
                { text: "Tamil Nadu", correct: false },
            ],
        },
        {
            id: 5,
            question: "Who is the author of the book 'God of Small Things'?",
            options: [
                { text: "Arundhati Roy", correct: true },
                { text: "Jhumpa Lahiri", correct: false },
                { text: "Kiran Desai", correct: false },
                { text: "Anita Desai", correct: false },
            ],
        },
        {
            id: 6,
            question: "Which Indian state is famous for the dance form 'Bharatanatyam'?",
            options: [
                { text: "Andhra Pradesh", correct: false },
                { text: "Tamil Nadu", correct: true },
                { text: "Karnataka", correct: false },
                { text: "Kerala", correct: false },
            ],
        },
        {
            id: 7,
            question: "Who was the first Indian to travel in space?",
            options: [
                { text: "Kalpana Chawla", correct: false },
                { text: "Rakesh Sharma", correct: true },
                { text: "Sunita Williams", correct: false },
                { text: "Yuri Gagarin", correct: false },
            ],
        },
        {
            id: 8,
            question: "Which city is known as the 'City of Joy' in India?",
            options: [
                { text: "Mumbai", correct: false },
                { text: "Kolkata", correct: true },
                { text: "Chennai", correct: false },
                { text: "Hyderabad", correct: false },
            ],
        },
        {
            id: 9,
            question: "Which Indian scientist invented the 'Raman Effect'?",
            options: [
                { text: "C.V. Raman", correct: true },
                { text: "Homi J. Bhabha", correct: false },
                { text: "A.P.J. Abdul Kalam", correct: false },
                { text: "Jagadish Chandra Bose", correct: false },
            ],
        },
        {
            id: 10,
            question: "Which state is known for its 'Bihu' festival?",
            options: [
                { text: "Punjab", correct: false },
                { text: "Bihar", correct: false },
                { text: "Assam", correct: true },
                { text: "Odisha", correct: false },
            ],
        },
        {
            id: 11,
            question: "Who is known as the 'Nightingale of India'?",
            options: [
                { text: "Lata Mangeshkar", correct: false },
                { text: "Asha Bhosle", correct: false },
                { text: "Sarojini Naidu", correct: true },
                { text: "Subbulakshmi", correct: false },
            ],
        },
        {
            id: 12,
            question: "Which is the longest river in India?",
            options: [
                { text: "Yamuna", correct: false },
                { text: "Godavari", correct: false },
                { text: "Ganga", correct: true },
                { text: "Brahmaputra", correct: false },
            ],
        },
        {
            id: 13,
            question: "Which Indian state is known as the 'Land of Oranges'?",
            options: [
                { text: "Maharashtra", correct: true },
                { text: "Uttar Pradesh", correct: false },
                { text: "Madhya Pradesh", correct: false },
                { text: "Gujarat", correct: false },
            ],
        },
        {
            id: 14,
            question: "Who was the first woman Governor of an Indian state?",
            options: [
                { text: "Sarojini Naidu", correct: true },
                { text: "Indira Gandhi", correct: false },
                { text: "Sucheta Kripalani", correct: false },
                { text: "Pratibha Patil", correct: false },
            ],
        },
        {
            id: 15,
            question: "Which Indian state is the largest producer of rice?",
            options: [
                { text: "Maharashtra", correct: false },
                { text: "West Bengal", correct: true },
                { text: "Uttar Pradesh", correct: false },
                { text: "Bihar", correct: false },
            ],
        },
    ],
    [
        {
            id: 1,
            question: "What is the national fruit of India?",
            options: [
                { text: "Apple", correct: false },
                { text: "Banana", correct: false },
                { text: "Mango", correct: true },
                { text: "Orange", correct: false },
            ],
        },
        {
            id: 2,
            question: "Which city is known as the 'Blue City' in India?",
            options: [
                { text: "Jodhpur", correct: true },
                { text: "Jaipur", correct: false },
                { text: "Udaipur", correct: false },
                { text: "Bikaner", correct: false },
            ],
        },
        {
            id: 3,
            question: "Who was the first Vice President of India?",
            options: [
                { text: "Dr. S. Radhakrishnan", correct: true },
                { text: "Dr. Zakir Hussain", correct: false },
                { text: "Dr. Rajendra Prasad", correct: false },
                { text: "Jawaharlal Nehru", correct: false },
            ],
        },
        {
            id: 4,
            question: "Which state is known as the 'Rice Bowl of India'?",
            options: [
                { text: "Punjab", correct: false },
                { text: "West Bengal", correct: false },
                { text: "Andhra Pradesh", correct: true },
                { text: "Kerala", correct: false },
            ],
        },
        {
            id: 5,
            question: "Who is the author of the book 'The Guide'?",
            options: [
                { text: "R.K. Narayan", correct: true },
                { text: "Vikram Seth", correct: false },
                { text: "Chetan Bhagat", correct: false },
                { text: "Arundhati Roy", correct: false },
            ],
        },
        {
            id: 6,
            question: "Which Indian state is famous for the dance form 'Garba'?",
            options: [
                { text: "Maharashtra", correct: false },
                { text: "Gujarat", correct: true },
                { text: "Rajasthan", correct: false },
                { text: "Punjab", correct: false },
            ],
        },
        {
            id: 7,
            question: "Who was the first Indian woman to climb Mount Everest?",
            options: [
                { text: "Bachendri Pal", correct: true },
                { text: "Santosh Yadav", correct: false },
                { text: "Premlata Agarwal", correct: false },
                { text: "Anshu Jamsenpa", correct: false },
            ],
        },
        {
            id: 8,
            question: "Which city is known as the 'Manchester of India'?",
            options: [
                { text: "Mumbai", correct: false },
                { text: "Ahmedabad", correct: true },
                { text: "Surat", correct: false },
                { text: "Pune", correct: false },
            ],
        },
        {
            id: 9,
            question: "Who is known as the 'Iron Man of India'?",
            options: [
                { text: "Jawaharlal Nehru", correct: false },
                { text: "Sardar Vallabhbhai Patel", correct: true },
                { text: "Subhas Chandra Bose", correct: false },
                { text: "Bhagat Singh", correct: false },
            ],
        },
        {
            id: 10,
            question: "Which state is known for its 'Pongal' festival?",
            options: [
                { text: "Kerala", correct: false },
                { text: "Tamil Nadu", correct: true },
                { text: "Andhra Pradesh", correct: false },
                { text: "Karnataka", correct: false },
            ],
        },
        {
            id: 11,
            question: "Who is known as the 'Flying Sikh of India'?",
            options: [
                { text: "P.T. Usha", correct: false },
                { text: "Milkha Singh", correct: true },
                { text: "Sandeep Singh", correct: false },
                { text: "Kapil Dev", correct: false },
            ],
        },
        {
            id: 12,
            question: "Which is the largest plateau in India?",
            options: [
                { text: "Deccan Plateau", correct: true },
                { text: "Chota Nagpur Plateau", correct: false },
                { text: "Malwa Plateau", correct: false },
                { text: "Mysore Plateau", correct: false },
            ],
        },
        {
            id: 13,
            question: "Which Indian state is known as the 'Land of Forests'?",
            options: [
                { text: "Madhya Pradesh", correct: true },
                { text: "Assam", correct: false },
                { text: "Chhattisgarh", correct: false },
                { text: "Jharkhand", correct: false },
            ],
        },
        {
            id: 14,
            question: "Who was the first woman to become the Chief Minister of an Indian state?",
            options: [
                { text: "Indira Gandhi", correct: false },
                { text: "Sucheta Kripalani", correct: true },
                { text: "Jayalalithaa", correct: false },
                { text: "Mamta Banerjee", correct: false },
            ],
        },
        {
            id: 15,
            question: "Which Indian state is the largest producer of wheat?",
            options: [
                { text: "Punjab", correct: true },
                { text: "Haryana", correct: false },
                { text: "Uttar Pradesh", correct: false },
                { text: "Madhya Pradesh", correct: false },
            ],
        },
    ],
    [
        {
            id: 1,
            question: "What is the national game of India?",
            options: [
                { text: "Cricket", correct: false },
                { text: "Hockey", correct: true },
                { text: "Football", correct: false },
                { text: "Kabaddi", correct: false },
            ],
        },
        {
            id: 2,
            question: "Which city is known as the 'Golden City' in India?",
            options: [
                { text: "Amritsar", correct: false },
                { text: "Jaisalmer", correct: true },
                { text: "Udaipur", correct: false },
                { text: "Jaipur", correct: false },
            ],
        },
        {
            id: 3,
            question: "Who was the first Deputy Prime Minister of India?",
            options: [
                { text: "Sardar Vallabhbhai Patel", correct: true },
                { text: "Morarji Desai", correct: false },
                { text: "Lal Bahadur Shastri", correct: false },
                { text: "Charan Singh", correct: false },
            ],
        },
        {
            id: 4,
            question: "Which state is known as the 'Tea Garden of India'?",
            options: [
                { text: "Assam", correct: true },
                { text: "Kerala", correct: false },
                { text: "Tamil Nadu", correct: false },
                { text: "West Bengal", correct: false },
            ],
        },
        {
            id: 5,
            question: "Who is the author of the book 'India Wins Freedom'?",
            options: [
                { text: "Maulana Abul Kalam Azad", correct: true },
                { text: "Jawaharlal Nehru", correct: false },
                { text: "Mahatma Gandhi", correct: false },
                { text: "Sardar Vallabhbhai Patel", correct: false },
            ],
        },
        {
            id: 6,
            question: "Which Indian state is famous for the dance form 'Bharatanatyam'?",
            options: [
                { text: "Kerala", correct: false },
                { text: "Tamil Nadu", correct: true },
                { text: "Andhra Pradesh", correct: false },
                { text: "Karnataka", correct: false },
            ],
        },
        {
            id: 7,
            question: "Who was the first Indian woman to win a Nobel Prize?",
            options: [
                { text: "Mother Teresa", correct: true },
                { text: "Indira Gandhi", correct: false },
                { text: "Sarojini Naidu", correct: false },
                { text: "Amartya Sen", correct: false },
            ],
        },
        {
            id: 8,
            question: "Which city is known as the 'City of Joy'?",
            options: [
                { text: "Mumbai", correct: false },
                { text: "Kolkata", correct: true },
                { text: "Chennai", correct: false },
                { text: "Delhi", correct: false },
            ],
        },
        {
            id: 9,
            question: "Who is known as the 'Light of Asia'?",
            options: [
                { text: "Rabindranath Tagore", correct: false },
                { text: "Buddha", correct: true },
                { text: "Swami Vivekananda", correct: false },
                { text: "Mahatma Gandhi", correct: false },
            ],
        },
        {
            id: 10,
            question: "Which state is known for its 'Onam' festival?",
            options: [
                { text: "Karnataka", correct: false },
                { text: "Kerala", correct: true },
                { text: "Tamil Nadu", correct: false },
                { text: "Andhra Pradesh", correct: false },
            ],
        },
        {
            id: 11,
            question: "Who is known as the 'Bard of Bengal'?",
            options: [
                { text: "Rabindranath Tagore", correct: true },
                { text: "Bankim Chandra Chatterjee", correct: false },
                { text: "Sarojini Naidu", correct: false },
                { text: "Subhas Chandra Bose", correct: false },
            ],
        },
        {
            id: 12,
            question: "Which is the highest peak in India?",
            options: [
                { text: "K2", correct: false },
                { text: "Kangchenjunga", correct: true },
                { text: "Nanda Devi", correct: false },
                { text: "Kamet", correct: false },
            ],
        },
        {
            id: 13,
            question: "Which Indian state is known as the 'Land of Temples'?",
            options: [
                { text: "Tamil Nadu", correct: true },
                { text: "Karnataka", correct: false },
                { text: "Odisha", correct: false },
                { text: "Andhra Pradesh", correct: false },
            ],
        },
        {
            id: 14,
            question: "Who was the first woman to become the President of India?",
            options: [
                { text: "Indira Gandhi", correct: false },
                { text: "Pratibha Patil", correct: true },
                { text: "Sarojini Naidu", correct: false },
                { text: "Sushma Swaraj", correct: false },
            ],
        },
        {
            id: 15,
            question: "Which Indian state is the largest producer of sugarcane?",
            options: [
                { text: "Uttar Pradesh", correct: true },
                { text: "Maharashtra", correct: false },
                { text: "Tamil Nadu", correct: false },
                { text: "Andhra Pradesh", correct: false },
            ],
        },
    ]
];

export default dataSet