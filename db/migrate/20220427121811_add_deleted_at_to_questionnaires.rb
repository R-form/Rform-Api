# frozen_string_literal: true

class AddDeletedAtToQuestionnaires < ActiveRecord::Migration[6.1]
  def change
    add_column :questionnaires, :deleted_at, :datetime
  end
end
