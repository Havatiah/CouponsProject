package com.gabriel.coupons.utils;

//db.pool.test
// exceptions
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class CreateTables {
	public static void main(String[] args) {
		createCompanyCouponTable();
		createCompanyTable();
		createCustomerCouponTable();
		createCustomerTable();
		createCouponTable();

	}

	// Defining the variable SQL for further use;
	static String sql = null;
	// defining variable URL for data base path
	static String url = "jdbc:derby://localhost:1527/coupon_db;create=true";

	/***
	 * Creating Company table
	 * 
	 */
	public static void createCompanyTable() {

		// Getting a connection to a database
		try (Connection con = DriverManager.getConnection(url);) {

			// Print when connected
			System.out.println("connected");
			// Create a statement
			Statement stmt = con.createStatement();
			// creating table in SQL language.
			sql = "CREATE TABLE Company(id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 , INCREMENT BY 1), name VARCHAR(30),password VARCHAR(20),email VARCHAR(20) )";
			stmt.executeUpdate(sql);
			System.out.println(sql);

		} catch (SQLException e) {
			System.out.println("Could not connect to the data base");
		}

		// Disconnecting
		System.out.println("disconnected");
	}

	/***
	 * Creating Customers table
	 * 
	 */
	public static void createCustomerTable() {

		// Getting a connection to a database
		try (Connection con = DriverManager.getConnection(url);) {

			// Print when connected
			System.out.println("connected");
			// Create a statement
			Statement stmt = con.createStatement();
			// SQL creating table.
			sql = "CREATE TABLE Customer(id BIGINT  PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 , INCREMENT BY 1), name VARCHAR(30),password VARCHAR(20))";
			stmt.executeUpdate(sql);
			System.out.println(sql);

		} catch (SQLException e) {
			e.printStackTrace();
			System.out.println("Could not connect to the data base");
		}

		// Disconnecting
		System.out.println("disconnected");
	}

	/***
	 * Creating Coupon table
	 * 
	 */
	public static void createCouponTable() {

		// Getting a connection to a database
		try (Connection con = DriverManager.getConnection(url);) {

			// Print when connected
			System.out.println("connected");
			// Create a statement
			Statement stmt = con.createStatement();
			// SQL creating table.
			sql = "CREATE TABLE Coupon(id BIGINT  PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 , INCREMENT BY 1), title VARCHAR (30), start_date DATE, end_date DATE, amount INTEGER, type VARCHAR (30), message VARCHAR (50), price FLOAT, image VARCHAR (30) )";
			stmt.executeUpdate(sql);
			System.out.println(sql);

		} catch (SQLException e) {
			e.printStackTrace();
			System.out.println("Could not connect to the data base");
		}

		// Disconnecting
		System.out.println("disconnected");
	}

	/***
	 * Creating Costumer Coupon Join table
	 * 
	 */
	public static void createCustomerCouponTable() {

		// Getting a connection to a database
		try (Connection con = DriverManager.getConnection(url);) {

			// Print when connected
			System.out.println("connected");
			// Create a statement
			Statement stmt = con.createStatement();
			// SQL creating table.
			sql = "CREATE TABLE CustomerCoupon( cust_id BIGINT, coupon_id BIGINT, PRIMARY KEY (cust_id, coupon_id))";
			stmt.executeUpdate(sql);
			System.out.println(sql);

		} catch (SQLException e) {
			System.out.println("Could not connect to the data base");
		}

		// Disconnecting
		System.out.println("disconnected");
	}

	/***
	 * Creating Company Coupon Join table
	 * 
	 */
	public static void createCompanyCouponTable() {

		// Getting a connection to a database
		try (Connection con = DriverManager.getConnection(url);) {

			// Print when connected
			System.out.println("connected");
			// Create a statement
			Statement stmt = con.createStatement();
			// SQL creating table.
			sql = "CREATE TABLE CompanyCoupon ( comp_id BIGINT, coupon_id BIGINT, PRIMARY KEY (comp_id, coupon_id))";
			stmt.executeUpdate(sql);
			System.out.println(sql);

		} catch (SQLException e) {
			e.printStackTrace();
			System.out.println("Could not connect to the data base");
		}

		// Disconnecting
		System.out.println("disconnected");
	}
}
