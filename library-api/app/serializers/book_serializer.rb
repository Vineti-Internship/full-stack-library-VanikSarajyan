class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price
  has_one :author
end
