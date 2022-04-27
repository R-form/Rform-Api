# frozen_string_literal: true

class Questionnaire < ApplicationRecord
  has_many :questions, dependent: :destroy
  accepts_nested_attributes_for :questions, allow_destroy: true

<<<<<<< HEAD
<<<<<<< HEAD
  default_scope { where(deleted_at: nil) }
=======
  default_scope {where(deleted_at: nil)}
>>>>>>> b2838ed (issues 18 fix answer hidden issues 20 add soft delete)
=======
  default_scope { where(deleted_at: nil) }
>>>>>>> 4b98f4d (issues#22 add Robocop to new_form branch)

  def destroy
    update(deleted_at: Time.current)
  end
end
