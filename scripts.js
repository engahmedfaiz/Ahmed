document.addEventListener('DOMContentLoaded', function() {
    const languages = [
        { name: 'JavaScript', description: 'JavaScript is a versatile, high-level, interpreted programming language.' },
        { name: 'Python', description: 'Python is a high-level, interpreted language known for its readability.' },
        { name: 'Java', description: 'Java is a high-level, compiled language used in many large-scale applications.' },
        { name: 'C#', description: 'C# is a modern, object-oriented programming language developed by Microsoft.' },
        { name: 'C++', description: 'C++ is a high-performance language used in system/software development.' },
        { name: 'Ruby', description: 'Ruby is a dynamic, interpreted language known for its simplicity and productivity.' },
        { name: 'PHP', description: 'PHP is a popular server-side scripting language for web development.' },
        { name: 'Swift', description: 'Swift is a powerful, modern language developed by Apple for iOS and macOS development.' },
        { name: 'Laravel', description: 'Laravel is a web application framework with expressive, elegant syntax.' },
        { name: 'Flutter', description: 'Flutter is an open-source UI software development kit created by Google.' }
    ];

    const languageList = document.getElementById('language-list');

    languages.forEach(language => {
        const languageItem = document.createElement('div');
        languageItem.classList.add('language-item');

        const languageTitle = document.createElement('h2');
        languageTitle.textContent = language.name;
        
        const languageDescription = document.createElement('p');
        languageDescription.textContent = language.description;

        languageItem.appendChild(languageTitle);
        languageItem.appendChild(languageDescription);
        languageList.appendChild(languageItem);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const typewriters = document.querySelectorAll('.typewriter');

    typewriters.forEach((typewriter) => {
        const text = typewriter.getAttribute('data-text');
        typewriter.textContent = '';
        let index = 0;

        function type() {
            if (index < text.length) {
                typewriter.textContent += text.charAt(index);
                index++;
                setTimeout(type, 50);
            }
        }

        type();
    });
});