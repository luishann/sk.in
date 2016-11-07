package entryProject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

public class HTTPRequestsJournal {

	public static void makeCall() throws IOException
	{
		
		
		//replace with the endpoint of our database
        URL databaseEndpoint = new URL("http://johntiger1.github.io/"); 
        URLConnection dataConn = databaseEndpoint.openConnection();
        
        //the question is what our database responds with
        //in theory we should use composition -- make a new Journal
        //object in here
        //discuss with Sebastian
        BufferedReader in = new BufferedReader(
                                new InputStreamReader(
                                dataConn.getInputStream()));
        String inputLine;

        while ((inputLine = in.readLine()) != null) 
            System.out.println(inputLine);
        in.close();
	}
	
	public static void main(String[]args) throws IOException
	{
		makeCall();
	}
	
}
