package test;

import java.sql.*;
import java.io.*;

public class PostgreSQLJDBC {
	
	public static void main(String args[]) throws IOException
    {
        String url;
        Connection conn;
        PreparedStatement pStatement;
        ResultSet rs;
        String queryString;

        try {
            Class.forName("org.postgresql.Driver");
        }
        catch (ClassNotFoundException e) {
            System.out.println("Failed to find the JDBC driver");
        }
        try
        {
        	// This program connects to my database csc343h-dianeh,
            // where I have loaded a table called Guess, with this schema:
            //     Guesses(_number_, name, guess, age)
            // and put some data into it.

            // Establish our own connection to the database.
            // This is the right url, username and password for jdbc
            // with postgres on cdf -- but you would replace "dianeh"
            // with your cdf account name.
            // Password really does need to be the emtpy string.
            //url = "jdbc:postgresql://localhost:5432/csc343h-dianeh";
            url = "jdbc:postgresql://ec2-54-225-64-254.compute-1.amazonaws.com:5432/d9mma6e753ienl?user=ziopwikywoanoj&password=yO-w-jpnxex5OKPQXLJE0sjgC6&sslmode=require";
        	
        	//conn = DriverManager.getConnection(url, "dianeh", "");
            conn = DriverManager.getConnection(url);
            
            // Executing this query without having first prepared it
            // would be safe because the entire query is hard-coded.  
            // No one can inject any SQL code into our query.
            // But let's get in the habit of using a prepared statement.
            queryString = "select * from skin.user";
            pStatement = conn.prepareStatement(queryString);
            rs = pStatement.executeQuery();

            // Iterate through the result set and report on each tuple.
            while (rs.next()) {
                String name = rs.getString("username");
                System.out.println(name);
            }

        }
        catch (SQLException se)
        {
            System.err.println("SQL Exception." +
                    "<Message>: " + se.getMessage());
        }

    }

}

                