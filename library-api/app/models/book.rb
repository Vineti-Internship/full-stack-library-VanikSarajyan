class Book < ApplicationRecord
  belongs_to :author

  validates :title, length: {in: 1..40}
  validates :price, :inclusion => {:in => 0..200}
  validates :author_id, presence: true
end
