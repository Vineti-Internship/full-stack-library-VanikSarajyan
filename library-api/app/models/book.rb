class Book < ApplicationRecord
  belongs_to :author

  validates :title, length: {in: 1..20}
  validates :description, length: {in: 0..100}
  validates :price, :inclusion => {:in => 0..200}
  validates :author_id, presence: true
end
