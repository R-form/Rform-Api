# frozen_string_literal: true

class Questionnaire < ApplicationRecord
  has_many :questions, dependent: :destroy
  accepts_nested_attributes_for :questions, allow_destroy: true

<<<<<<< HEAD
  default_scope { where(deleted_at: nil) }
=======
  default_scope {where(deleted_at: nil)}
>>>>>>> b2838ed (issues 18 fix answer hidden issues 20 add soft delete)

  def destroy
    update(deleted_at: Time.current)
  end
end
