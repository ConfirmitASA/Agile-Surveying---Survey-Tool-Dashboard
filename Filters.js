class Filters {
  static function PackageFilter(context) {
    var agileSurveyIdParamaterName = agileSurveyId;
    if(context.State.Parameters.IsNull(agileSurveyIdParamaterName)) {
      throw new Exception(AgileSurveyId cannot be null);
    }
    var agileSurveyId = context.State.Parameters.GetString(agileSurveyIdParamaterName);

    context.Component.Expression = 'packageStatus = available and surveyId=' + agileSurveyId + '';
  }
}