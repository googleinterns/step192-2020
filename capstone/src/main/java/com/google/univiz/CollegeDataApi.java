package com.google.univiz;

import java.util.List;
import java.util.Set;

public interface CollegeDataApi {

  List<CollegeData> getCollegesById(Set<CollegeId> ids);
}