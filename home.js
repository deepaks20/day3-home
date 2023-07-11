import React, { useState } from 'react';
import './home.css';

function Home() {
  const dropdownSections = [
    {
      name: 'Tools',
      subcategories: ['Hand Tools', 'Power Tools', 'Gardening Gloves'],
    
    },
    {
      name: 'Equipment',
      subcategories: ['Lawn Mowers', 'Pruning Shears', 'Watering Cans'],
     
    },
    {
      name: 'Plants',
      subcategories: ['Flowering Plants', 'Indoor Plants', 'Herbs'],
  
    },
    {
      name: 'Seeds',
      subcategories: ['Flower Seeds', 'Vegetable Seeds', 'Grass Seeds'],
      
    },
    {
      name: 'Fertilizers',
      subcategories: ['Organic Fertilizers', 'Chemical Fertilizers', 'Compost'],
    
    },
    {
      name: 'Pesticides',
      subcategories: ['Insecticides', 'Herbicides', 'Fungicides'],
      
    },
    {
      name: 'Garden Decor',
      subcategories: ['Statues', 'Outdoor Lighting', 'Bird Baths'],
      
    },
    {
      name: 'Offers',
      subcategories: ['Super offers', 'Bank offers'],
    },
  ];
  const [searchValue, setSearchValue] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };
  const handleDropdownToggle = (category) => {
    setSelectedCategory(selectedCategory === category ? '' :category);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search logic
    console.log('Searching for:', searchValue);
    setSearchValue('');
  };
  const filteredSections = dropdownSections.filter((section) => {
    const matchedCategory = section.name.toLowerCase().includes(searchValue.toLowerCase());
    const matchedSubcategories = section.subcategories.some((subcategory) =>
      subcategory.toLowerCase().includes(searchValue.toLowerCase())
    );
    return matchedCategory || matchedSubcategories;
  });

  

  return (
    <div>
      <header className="header">
      <form onSubmit={handleSearchSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchInputChange}
          />
          
          <button type="submit">Search</button>
        </div>
     </form>
        <a href="#" className="logo">Garden</a>
        <nav className="nav-items">
          <a href="#">Tools</a>
          <a href="#">Equipmen</a>
          <a href="#">Plants</a>
          <a href="#">Seeds</a>
          <a href="#">Fertilizers</a>
          <a href="#">Pesticides</a>
          <a href="#">Garden Decor</a>
          <a href="#">Offers</a>
        </nav>
      </header>
      <main>
        {filteredItems.length > 0 && (
          <div className="search-results">
            <h2>Search Results:</h2>
            <ul>
              {filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="intro">
          <h1>Nature's Haven: Cultivating Beauty and Serenity</h1>
          <p>Floral Haven</p>
        </div>
        <div className="achievements">
          <div className="work">
            <i className="fas fa-atom"></i>
            <p className="work-heading">Projects</p>
            <p className="work-text">I have worked on many projects and I am very proud of them. I am a very good developer and I am always looking for new projects.</p>
          </div>
          <div className="work">
            <i className="fas fa-skiing"></i>
            <p className="work-heading">Skills</p>
            <p className="work-text">I have a lot of skills and I am very good at them. I am very good at programming and I am always looking for new skills.</p>
          </div>
          <div className="work">
            <i className="fas fa-ethernet"></i>
            <p className="work-heading">Network</p>
            <p className="work-text">I have a lot of network skills and I am very good at them. I am very good at networking and I am always looking for new network skills.</p>
          </div>
        </div>
        <div className="about-me">
          <div className="about-me-text">
            <h2>About Me</h2>
            <p>I am a web developer and I love to create websites. I am a very good developer and I am always looking for new projects. I am a very good developer and I am always looking for new projects.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="me" />
        </div>
      </main>
      <footer className="footer">
        <div className="copy">&copy; 2022 Developer</div>
        <div className="bottom-links">
          <div className="links">
            <span>More Info</span>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="links">
            <span>Social Links</span>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
