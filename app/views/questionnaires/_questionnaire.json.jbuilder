# frozen_string_literal: true

json.extract! questionnaire, :id, :name, :created_at, :updated_at
json.url questionnaire_url(questionnaire, format: :json)
