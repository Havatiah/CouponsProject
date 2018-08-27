package com.gabriel.coupons.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import com.gabriel.coupons.exceptions.CouponSystemException;

public class ConnectionPool {

	// Class attributes Set: set of connections
	private Set<Connection> connections = new HashSet<>();

	// 2nd step of singleton. Create one instance of an object.
	private static ConnectionPool instance;

	// Define max number of available connections
	private static final int MAX_CON = 10;
	// URL for connections
	private final String url = "jdbc:derby://localhost:1527/coupon_db";

	/***
	 * Private Ctor
	 * 
	 * @throws CouponSystemException
	 */
	// 1st step of singleton
	private ConnectionPool() throws CouponSystemException {
		// Share all the connections while they are still available (first time)
		for (int i = 0; i < MAX_CON; i++) {
			try {
				DriverManager.registerDriver(new org.apache.derby.jdbc.ClientDriver());
				Connection con = DriverManager.getConnection(url);
				connections.add(con);
			} catch (SQLException e) {
				throw new CouponSystemException("Connection pool init failed", e);

			}
		}
	}

	/***
	 * @return the connection
	 * @throws SQLException
	 */
	public synchronized Connection getConnection() {
		while (connections.isEmpty()) {
			try {
				// While there are no connections available, user will wait
				wait();
			} catch (InterruptedException e) {
				return null;
			}
		}
		// If we are here, connections ARE available
		// get iterator from the Set, as there is no other way to access connection
		Iterator<Connection> it = connections.iterator();
		// show the next available connection
		Connection con = it.next();
		// once someone got a connection, remove the reference for that connection
		it.remove();
		return con;
	}

	public synchronized void closeRemainingResources(PreparedStatement pstmt) {
		if (pstmt != null) {
			try {
				pstmt.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

	public synchronized void closeRemainingResources(PreparedStatement pstmt, ResultSet rs) {
		if (pstmt != null) {
			try {
				pstmt.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		if (rs != null) {
			try {
				rs.close();
			} catch (SQLException e) {
			}
		}
	}

	// Once the user finished using the connection, the connection returns to the
	// pool

	public synchronized void returnConnection(Connection con) {
		// add the connection back to the Set
		connections.add(con);
		// notify all threads waiting for connection
		notifyAll();
	}

	/***
	 * Close all connections
	 */
	public synchronized void closeAllConnections() {
		// Counter for checking if all connections are close
		int counter = 0;

		// Checking if the remove-counter is less than the max connections
		while (counter < MAX_CON) {

			// While the connection pool is empty (all connections are being used) wait..
			while (connections.isEmpty()) {
				try {
					wait();
				} catch (InterruptedException e) {
					System.err.println("Someone interrupt waiting");
				}
			}
			// Running over the available connections
			// Closing the connection and adding 1 to the counter
			Iterator<Connection> itCon = connections.iterator();
			while (itCon.hasNext()) {
				Connection currentConnection = itCon.next();

				try {
					currentConnection.close();
					itCon.remove();
					counter++;
				} catch (SQLException e) {
					System.err.println("Couldnt close the current connection");
				}
			}
		}

		System.out.println(counter + " connections closed out of " + MAX_CON);
	}

	/**
	 * @return the only instance of the connection pool object
	 * @throws CouponSystemException
	 */
	// 3rd step of singleton
	public synchronized static ConnectionPool getInstance() throws CouponSystemException {
		if (instance == null) {
			instance = new ConnectionPool();
		}
		return instance;
	}

}
