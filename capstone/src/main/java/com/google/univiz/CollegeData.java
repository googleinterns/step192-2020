package com.google.univiz;

import com.google.auto.value.AutoValue;

/**
 * CollegeData is a class representing a single university/college/institution.
 */
@AutoValue
abstract class CollegeData {

  abstract int id();

  abstract String name();

  abstract String city();

  /**
   * Returns a boolean that tells whether the institution is the main campus or not, true or false.
   */
  abstract boolean isMainCampus();

  abstract float latitude();

  abstract float longitude();

  /**
   * Returns an enum CarnegieSizeDegree that represents the institution's carnegie size degree, or
   * the highest degree certificate available at that institution, from not applicable to
   * exclusively graduate/professional.
   */
  abstract CarnegieSizeDegree carnegieSizeDegree();

  abstract float avgSat();

  abstract int numOfUndergrads();

  abstract int avgCost();

  abstract float ratioOfMen();

  abstract float ratioOfWomen();

  static Builder builder() {
    return new AutoValue_CollegeData.Builder().setCarnegieSizeDegree(NOT_AVAILABLE);
  }

  @AutoValue.Builder
  abstract static class Builder {

    abstract Builder setId(int value);

    abstract Builder setName(String value);

    abstract Builder setCity(String value);

    abstract Builder setIsMainCampus(int value);

    abstract Builder setLatitude(double value);

    abstract Builder setLongitude(double value);

    abstract Builder setCarnegieSizeDegree(CarnegieSizeDegree value);

    abstract Builder setAdmissionRate(double value);

    abstract Builder setAvgSat(double value);

    abstract Builder setNumOfUndergrads(int value);

    abstract Builder setAvgCost(int value);

    abstract Builder setRatioOfMen(double value);

    abstract Builder setRatioOfWomen(double value);

    abstract CollegeData build();
  }
}
