<<<<<<< HEAD
# frozen_string_literal: true

=======
>>>>>>> b2838ed (issues 18 fix answer hidden issues 20 add soft delete)
class AddDeletedAtToQuestionnaires < ActiveRecord::Migration[6.1]
  def change
    add_column :questionnaires, :deleted_at, :datetime
  end
end
