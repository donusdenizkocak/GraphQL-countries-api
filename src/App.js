import React, { useState, useEffect } from 'react';
import './App.css';
import { useQuery, gql, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

const LIST_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
      capital
      languages {
        name
      }
    }
  }
`;

const predefinedColors = ['red', 'blue', 'green', 'yellow', 'purple'];

function App() {
  const [country, setCountry] = useState('US');
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState('');
  const [group, setGroup] = useState(''); // Başlangıçta herhangi bir grup seçilmedi

  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  useEffect(() => {
    if (!loading && !error) {
      const initialSelectedIndex = Math.min(9, data.countries.length - 1);
      setSelectedItem(data.countries[initialSelectedIndex]);
    }
  }, [data, loading, error]);

 

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleGroupChange = event => {
    setGroup(event.target.value);
  };

  const handleItemClick = item => {
    setSelectedItem(item);
  };

  // Seçilen ülkenin başkentini veya emoji'sini bulmak için bir işlev
  const findInfo = (selectedCountryCode) => {
    const selectedCountry = data?.countries.find(country => country.code === selectedCountryCode);
    if (selectedCountry) {
      if (group === 'capital') {
        return selectedCountry.capital || ''; // Başkent yoksa boş bir dize döndür
      } else if (group === 'emoji') {
        return selectedCountry.emoji || ''; // Emoji yoksa boş bir dize döndür
      }
    }
    return '';
  };

  const filteredCountries = data?.countries.filter(country =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  ) || [];

  return (
    <div className="App">
      <div>
        <input type="text" placeholder="Filter" value={filter} onChange={handleFilterChange} />
        <select value={group} onChange={handleGroupChange}>
          <option value="">Seç</option>
          <option value="capital">Başkent</option>
          <option value="emoji">Emoji</option>
        </select>
      </div>
      
      <ul>
        {filteredCountries
          .map(item => (
            <li
              key={item.code}
              onClick={() => handleItemClick(item)}
              style={{
                backgroundColor: selectedItem === item ? predefinedColors[0] : 'transparent',
              }}
            >
              {item.name}
            </li>
          ))}
      </ul>
      {selectedItem && (
        <div>
          <h2>Seçilen Ülke: {selectedItem.name}</h2>
          <p>{group === 'capital' ? 'Başkent' : 'Emoji'}: {findInfo(selectedItem.code)}</p>
        </div>
      )}
    </div>
  );
}

export default App;
