package entryProject;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Journal {
	
	//The list of entries for the journal
	private List<Entry> entries = new ArrayList<Entry>();
	
	private String journalName;
	
	public Journal(String journalName){
		this.journalName = journalName;
	}
	
	/**
	 * Create an entry and add it to the list of entries
	 * @param entry
	 */
	public void addEntry(String photoPath){
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		Date date = new Date();
		Entry entry = new Entry(photoPath,dateFormat.format(date));
		entries.add(entry);
	}
	
	/**
	 * Delete Entry entry
	 * @param entry
	 */
	public void deleteEntry(Entry entry){
		entries.remove(entry);
	}
	
	/**
	 * 
	 * Returns a list of entries for the issue
	 * @param issue
	 * @return entriesByIssue
	 */
	public List<Entry> getEntriesByIssue(String issue){
		List<Entry> entriesByIssue = new ArrayList<Entry>();
		for(Entry entry: this.entries){
			if (entry.getIssues().contains(issue)){
				entriesByIssue.add(entry);
			}
		}
		return entriesByIssue;
		
	}
	

}
