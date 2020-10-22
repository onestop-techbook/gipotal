alter table "public"."circle_items"
           add constraint "circle_items_circle_id_fkey"
           foreign key ("circle_id")
           references "public"."circles"
           ("id") on update restrict on delete restrict;
