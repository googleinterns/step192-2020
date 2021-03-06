package com.google.univiz.servlets;

import com.google.common.collect.ImmutableList;
import com.google.gson.Gson;
import com.google.univiz.api.representation.CollegeId;
import com.google.univiz.api.resource.VisResource;
import com.google.univiz.common.ServletHelper;
import java.io.IOException;
import java.util.List;
import javax.inject.Inject;
import javax.inject.Singleton;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Singleton
public final class CollegeDataVisualizationService extends HttpServlet {

  public static final String DEADLINES_SUFFIX = "deadlines";
  public static final String STATS_SUFFIX = "stats";
  public static final String TIMELINES_SUFFIX = "timelines";

  private final VisResource visResource;
  private final Gson gson;

  @Inject
  CollegeDataVisualizationService(VisResource visResource, Gson gson) {
    this.visResource = visResource;
    this.gson = gson;
  }

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
    List<CollegeId> collegeIds = CollegeIdParamParser.parseCollegeIds(req);
    List<? extends Object> response;
    if (req.getServletPath().endsWith(DEADLINES_SUFFIX)) {
      response = visResource.getDeadlines(collegeIds);
    } else if (req.getServletPath().endsWith(STATS_SUFFIX)) {
      response = visResource.getCollegeStats(collegeIds);
    } else if (req.getServletPath().endsWith(TIMELINES_SUFFIX)) {
      throw new UnsupportedOperationException();
    } else {
      throw new AssertionError("Unexpected request path:" + req.getServletPath());
    }

    ServletHelper.writeJsonToResponse(gson, resp, ImmutableList.copyOf(response));
  }
}
