package com.google.univiz.api;

import java.util.List;

/**
 * Communicates directly with the data source to get a list of college suggestions related to a
 * client query
 */
public interface SuggestionDataApi {
  /**
   * Takes a fragment of a college name or a complete college name and returns a list of
   * SuggestionData objects
   */
  List<SuggestionData> getCollegeSuggestions(String collegeName);
}