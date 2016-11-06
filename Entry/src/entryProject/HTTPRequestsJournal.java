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
        URL yahoo = new URL("https://www.yahoo.com/"); 
        URLConnection yc = yahoo.openConnection();
        
        //the question is what our database responds with
        //discuss with Sebastian
        BufferedReader in = new BufferedReader(
                                new InputStreamReader(
                                yc.getInputStream()));
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
