package entryProject;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Observable;
import java.util.Observer;

public class Journal{

	// The list of entries for the journal
	private List<Entry> entries = new ArrayList<Entry>();

	private String journalName;

	public Journal(String journalName) {
		this.journalName = journalName;
	}

	/**
	 * Create an entry and add it to the list of entries
	 * 
	 * @param entry
	 */
	public void addEntry(String photoPath) {
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		Date date = new Date();
		Entry entry = new Entry(dateFormat.format(date));
		entries.add(entry);
	}

	/**
	 * Delete Entry entry
	 * 
	 * @param entry
	 */
	public void deleteEntry(Entry entry) {
		entries.remove(entry);
	}

	/**
	 * 
	 * Returns a list of entries for the issue
	 * 
	 * @param issue
	 * @return entriesByIssue
	 */
	public List<Entry> getEntriesByIssue(String issue) {
		List<Entry> entriesByIssue = new ArrayList<Entry>();
		for (Entry entry : this.entries) {
			if (entry.getIssues().contains(issue)) {
				entriesByIssue.add(entry);
			}
		}
		return entriesByIssue;

	}

	/**
	 * Returns a list of entries for the product that was used
	 * 
	 * @param product
	 * @return entriesByProduct
	 */
	public List<Entry> getEntriesByProduct(Product product) {
		List<Entry> entriesByProduct = new ArrayList<Entry>();
		for (Entry entry : this.entries) {
			if (entry.getProducts().contains(product)) {
				entriesByProduct.add(entry);
			}
		}
		return entriesByProduct;

	}

	/**
	 * Searches for an entry with a specific date
	 * 
	 * @param date
	 * @return the entry with the date we are looking for
	 */
	public Entry searchEntry(String date) {
		if (date == null) {
			throw new IllegalArgumentException();
		}
		for (Entry entry : this.entries) {
			if (entry.getDate().equals(date)) {
				return entry;
			}
		}
		return null;

	}

	/**
	 * Sorts the entries by their ratings in a decresing order
	 * 
	 * @return the sorted list
	 */
	public List<Entry> sortByRating() {
		List<Entry> sortedEntries = new ArrayList<Entry>(this.entries);
		sortedEntries.sort(Collections.reverseOrder());
		return sortedEntries;
	}



}
