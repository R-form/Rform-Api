# frozen_string_literal: true

class ResponsesController < ApplicationController
  def new
    @questionnaire = Questionnaire.find(params[:questionnaire_id])
  end
end
