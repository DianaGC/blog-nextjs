import { IBlog } from "../home/components/Home/state/useBlogState.interfaces";
import { searchBlog, getBlogDetail } from "./api";

describe("utils", () => {

    const value : IBlog[]= [
        {
          id: '0001',
          title: '5G En Casa',
          description: 'Descubra cómo 5G está impulsando la próxima generación de banda ancha inalámbrica y conectando comunidades en todo el país.',
          image: '/casa.PNG',
          date: 1700691184
        }
      ]
    
    const blogs : IBlog[]= []
    
      it("When the searchBlog function receives the word Home, it displays the value object", () => {
        expect(searchBlog("Casa")).toEqual(value);
      });

      it("When the searchBlog function receives a word that does not match the list of objects, it returns an empty start", () => {
        expect(searchBlog("001")).toEqual(blogs);
      });

      it("When the getBlogDetail function receives a correct id then return a object", () => {
        expect(getBlogDetail("0001")).toEqual(value[0]);
      });

      it("When the getBlogs function is call then return a list of object", () => {
        expect(getBlogDetail).toBeDefined
      })



})