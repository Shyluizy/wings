import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  // State to hold data for products, transactions, and users
  const [products, setProducts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [users, setUsers] = useState([]);

  // State to handle loading and errors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products, transactions, and users data
        const productsResponse = await axios.get('http://localhost:5000/products');
        const transactionsResponse = await axios.get('http://localhost:5000/transactions');
        const usersResponse = await axios.get('http://localhost:5000/users');

        // Set data to state
        setProducts(productsResponse.data);
        setTransactions(transactionsResponse.data);
        setUsers(usersResponse.data);
      } catch (err) {
        setError('Error fetching data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Inventory Management Dashboard</h1>

      {/* Products Section */}
      <section>
        <h2>Products</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Transactions Section */}
      <section>
        <h2>Transactions</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product ID</th>
              <th>Date</th>
              <th>Type</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.product_id}</td>
                <td>{transaction.date}</td>
                <td>{transaction.type}</td>
                <td>{transaction.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Users Section */}
      <section>
        <h2>Users</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
